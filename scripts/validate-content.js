#!/usr/bin/env node

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname, '..');
const contentRoots = [
  'articles',
  'questions',
  'tutorials',
  'getting-started',
  'quicktips',
  'pages',
  'nav',
  'techniques',
];

const issues = [];
const pageCount = { scanned: 0, validated: 0 };
const translationsCache = new Map();
const reportedTranslationFiles = new Set();
const todayIso = formatToday();

for (const root of contentRoots) {
  walkDirectory(path.join(repoRoot, root));
}

if (issues.length > 0) {
  console.error(`Found ${issues.length} issue(s) across ${pageCount.validated} content page(s).`);
  const grouped = groupByFile(issues);
  for (const [relativePath, fileIssues] of grouped) {
    console.error(`\n${relativePath}`);
    for (const issue of fileIssues) {
      console.error(`  - ${issue.message}`);
    }
  }
  process.exitCode = 1;
} else {
  console.log(`Validated ${pageCount.validated} content page(s); no issues found.`);
}

function walkDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walkDirectory(fullPath);
      continue;
    }
    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== '.html') {
      continue;
    }
    pageCount.scanned += 1;
    validatePage(fullPath);
  }
}

function validatePage(absolutePath) {
  const html = fs.readFileSync(absolutePath, 'utf8');
  if (!looksLikeContentPage(html)) {
    return;
  }

  pageCount.validated += 1;
  const relativePath = toPosix(path.relative(repoRoot, absolutePath));
  const htmlLang = extractHtmlLang(html);
  const metadata = extractMetadata(html);
  const parsedName = parsePageFilename(path.basename(relativePath));

  if (!htmlLang) {
    addIssue(relativePath, 'Missing `<html lang="...">` declaration.');
  } else if (parsedName.language && parsedName.language !== htmlLang) {
    addIssue(
      relativePath,
      `Filename language suffix \`${parsedName.language}\` does not match \`<html lang="${htmlLang}">\`.`
    );
  } else if (!parsedName.language && htmlLang !== 'en') {
    addIssue(
      relativePath,
      `Non-English page uses \`<html lang="${htmlLang}">\` but the filename does not have a recognizable language suffix.`
    );
  }

  validateMetadata(relativePath, metadata, parsedName);
  validateDates(relativePath, metadata);
  validateBoilerplate(relativePath, absolutePath, html, htmlLang);
  validateLocalAssets(relativePath, absolutePath, html);
  validateTranslations(relativePath, absolutePath, html);
}

function looksLikeContentPage(html) {
  return /var\s+f\s*=\s*\{\s*\}/i.test(html) && /\bf\.filename\s*=/i.test(html);
}

function extractHtmlLang(html) {
  const match = html.match(/<html\b[^>]*\blang\s*=\s*["']([^"']+)["']/i);
  return match ? match[1].trim().toLowerCase() : null;
}

function extractMetadata(html) {
  const match = html.match(/<script\b[^>]*>([\s\S]*?\bvar\s+f\s*=\s*\{\s*\}[\s\S]*?)<\/script>/i);
  const block = match ? match[1] : '';

  return {
    directory: parseStringAssignment(block, 'directory'),
    filename: parseStringAssignment(block, 'filename'),
    path: parseStringAssignment(block, 'path'),
    firstPubDate: parseSimpleStringValue(block, 'firstPubDate'),
    thisVersionDate: parseObjectDateValue(block, 'thisVersion'),
    lastSubstUpdateDate: parseObjectDateValue(block, 'lastSubstUpdate'),
  };
}

function parseStringAssignment(block, fieldName) {
  const line = block
    .split(/\r?\n/)
    .find((candidate) => new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=`).test(candidate));

  if (!line) {
    return { ok: false, reason: `Missing \`f.${fieldName}\` assignment.` };
  }

  const withoutComment = line.replace(/\/\/.*$/, '').trim();
  const match = withoutComment.match(
    new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*(.+?)\\s*;?$`)
  );

  if (!match) {
    return { ok: false, reason: `Could not parse \`f.${fieldName}\`.` };
  }

  try {
    return { ok: true, value: parseStringExpression(match[1]) };
  } catch (error) {
    return { ok: false, reason: `Could not parse \`f.${fieldName}\`: ${error.message}` };
  }
}

function parseStringExpression(expression) {
  const parts = expression
    .split('+')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    throw new Error('empty string expression');
  }

  return parts
    .map((part) => {
      const quote = part[0];
      if ((quote !== '\'' && quote !== '"') || part[part.length - 1] !== quote) {
        throw new Error(`unsupported token ${part}`);
      }
      return part.slice(1, -1);
    })
    .join('');
}

function parseSimpleStringValue(block, fieldName) {
  const match = block.match(
    new RegExp(`\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*['"]([^'"]+)['"]`)
  );
  return match ? match[1] : null;
}

function parseObjectDateValue(block, fieldName) {
  const match = block.match(
    new RegExp(
      `\\bf\\.${escapeRegExp(fieldName)}\\s*=\\s*\\{[\\s\\S]*?\\bdate\\s*:\\s*['"]([^'"]+)['"]`
    )
  );
  return match ? match[1] : null;
}

function parsePageFilename(fileName) {
  const htmlStem = fileName.replace(/\.html$/i, '');
  const match = htmlStem.match(/^(.*)\.([a-z]{2,3}(?:-[a-z0-9]{2,8})*)$/i);
  if (!match) {
    return { stem: htmlStem, language: null };
  }
  return { stem: match[1], language: match[2].toLowerCase() };
}

function validateMetadata(relativePath, metadata, parsedName) {
  const actualDirectory = actualDirectoryFor(relativePath);
  const actualFilename = parsedName.stem;
  const actualPath = pathToRepoRoot(relativePath);

  assertStringField(relativePath, metadata.directory, 'f.directory', actualDirectory);
  assertStringField(relativePath, metadata.filename, 'f.filename', actualFilename);
  assertStringField(relativePath, metadata.path, 'f.path', actualPath);
}

function assertStringField(relativePath, parsedField, label, expected) {
  if (!parsedField.ok) {
    addIssue(relativePath, parsedField.reason);
    return;
  }
  if (parsedField.value !== expected) {
    addIssue(relativePath, `${label} is \`${parsedField.value}\`, expected \`${expected}\`.`);
  }
}

function actualDirectoryFor(relativePath) {
  const directory = path.posix.dirname(relativePath);
  return directory === '.' ? '' : `${directory}/`;
}

function pathToRepoRoot(relativePath) {
  const directory = path.posix.dirname(relativePath);
  if (directory === '.') {
    return '';
  }

  const depth = directory.split('/').length;
  return '../'.repeat(depth);
}

function validateDates(relativePath, metadata) {
  validateDate(relativePath, 'f.firstPubDate', metadata.firstPubDate);
  validateDate(relativePath, 'f.thisVersion.date', metadata.thisVersionDate);
  if (metadata.lastSubstUpdateDate) {
    validateDate(relativePath, 'f.lastSubstUpdate.date', metadata.lastSubstUpdateDate);
  }
}

function validateDate(relativePath, label, value) {
  if (!value) {
    addIssue(relativePath, `Missing ${label}.`);
    return;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    addIssue(relativePath, `${label} must use YYYY-MM-DD; found \`${value}\`.`);
    return;
  }

  const [year, month, day] = value.split('-').map(Number);
  const utcDate = new Date(Date.UTC(year, month - 1, day));
  const isRealDate =
    utcDate.getUTCFullYear() === year &&
    utcDate.getUTCMonth() === month - 1 &&
    utcDate.getUTCDate() === day;

  if (!isRealDate) {
    addIssue(relativePath, `${label} is not a real calendar date: \`${value}\`.`);
    return;
  }

  if (value > todayIso) {
    addIssue(relativePath, `${label} is in the future: \`${value}\` > \`${todayIso}\`.`);
  }
}

function validateBoilerplate(relativePath, absolutePath, html, htmlLang) {
  const tags = extractTags(stripHtmlComments(html), 'script');
  const matches = [];

  for (const tag of tags) {
    const attributes = parseAttributes(tag);
    if (!attributes.src) {
      continue;
    }
    const match = attributes.src.match(/(?:^|\/)boilerplate-([a-z0-9-]+)\.js$/i);
    if (match) {
      matches.push(match[1].toLowerCase());
    }
  }

  if (matches.length === 0) {
    addIssue(relativePath, 'Missing `boilerplate-<lang>.js` script reference.');
    return;
  }

  if (!htmlLang) {
    return;
  }

  const uniqueMatches = [...new Set(matches)];
  if (uniqueMatches.length > 1) {
    addIssue(
      relativePath,
      `Multiple boilerplate languages referenced: ${uniqueMatches.map((lang) => `\`${lang}\``).join(', ')}.`
    );
  }

  if (!uniqueMatches.includes(htmlLang)) {
    addIssue(
      relativePath,
      `Boilerplate script language ${uniqueMatches.map((lang) => `\`${lang}\``).join(', ')} does not match \`<html lang="${htmlLang}">\`.`
    );
  }
}

function validateLocalAssets(relativePath, absolutePath, html) {
  const commentFreeHtml = stripHtmlComments(html);
  const assets = [];
  const seen = new Set();

  for (const tag of extractTags(commentFreeHtml, 'script')) {
    const attributes = parseAttributes(tag);
    if (attributes.src) {
      assets.push({ kind: 'script', ref: attributes.src });
    }
  }

  for (const tag of extractTags(commentFreeHtml, 'img')) {
    const attributes = parseAttributes(tag);
    if (attributes.src) {
      assets.push({ kind: 'image', ref: attributes.src });
    }
  }

  for (const tag of extractTags(commentFreeHtml, 'link')) {
    const attributes = parseAttributes(tag);
    if (!attributes.href || !attributes.rel) {
      continue;
    }
    const relTokens = attributes.rel.toLowerCase().split(/\s+/);
    if (relTokens.includes('stylesheet')) {
      assets.push({ kind: 'stylesheet', ref: attributes.href });
    }
  }

  for (const asset of assets) {
    const resolved = resolveLocalReference(asset.ref, absolutePath);
    if (!resolved) {
      continue;
    }

    const dedupeKey = `${asset.kind}\u0000${resolved.absolutePath}`;
    if (seen.has(dedupeKey)) {
      continue;
    }
    seen.add(dedupeKey);

    if (!fs.existsSync(resolved.absolutePath)) {
      addIssue(
        relativePath,
        `Missing ${asset.kind} file referenced by \`${asset.ref}\` (${resolved.relativePath}).`
      );
    }
  }
}

function validateTranslations(relativePath, absolutePath, html) {
  const commentFreeHtml = stripHtmlComments(html);
  const translationsScripts = new Set();

  for (const tag of extractTags(commentFreeHtml, 'script')) {
    const attributes = parseAttributes(tag);
    if (!attributes.src) {
      continue;
    }

    const localPath = localRelativePath(attributes.src);
    if (!localPath || !/translations\.js$/i.test(localPath)) {
      continue;
    }

    const resolved = resolveLocalReference(attributes.src, absolutePath);
    if (!resolved) {
      continue;
    }

    translationsScripts.add(resolved.absolutePath);
  }

  for (const translationsPath of translationsScripts) {
    if (!fs.existsSync(translationsPath)) {
      continue;
    }

    if (reportedTranslationFiles.has(translationsPath)) {
      continue;
    }
    reportedTranslationFiles.add(translationsPath);

    const translationsRelative = toPosix(path.relative(repoRoot, translationsPath));
    const cachedIssues = loadAndValidateTranslations(translationsPath);
    for (const message of cachedIssues) {
      addIssue(translationsRelative, message);
    }
  }
}

function loadAndValidateTranslations(absolutePath) {
  const cached = translationsCache.get(absolutePath);
  if (cached) {
    return cached;
  }

  const fileIssues = [];
  const source = fs.readFileSync(absolutePath, 'utf8');
  const sandbox = {};

  try {
    vm.runInNewContext(source, sandbox, { filename: absolutePath });
  } catch (error) {
    fileIssues.push(`could not be evaluated (${error.message})`);
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  const trans = sandbox.trans;
  if (!trans || typeof trans !== 'object') {
    fileIssues.push('does not define `trans`.');
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  if (!Array.isArray(trans.versions)) {
    fileIssues.push('`trans.versions` is missing or is not an array.');
    translationsCache.set(absolutePath, fileIssues);
    return fileIssues;
  }

  const versions = new Set(trans.versions.map((value) => String(value)));
  for (const [key, value] of Object.entries(trans)) {
    if (!key.endsWith('translations') || key === 'versions') {
      continue;
    }

    if (!Array.isArray(value)) {
      fileIssues.push(`\`trans.${key}\` is not an array.`);
      continue;
    }

    const extras = value.filter((entry) => !versions.has(String(entry)));
    if (extras.length > 0) {
      fileIssues.push(
        `\`trans.${key}\` contains values not listed in \`trans.versions\`: ${extras
          .map((entry) => `\`${entry}\``)
          .join(', ')}.`
      );
    }
  }

  translationsCache.set(absolutePath, fileIssues);
  return fileIssues;
}

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

function extractTags(html, tagName) {
  const matches = html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'));
  return matches || [];
}

function parseAttributes(tagMarkup) {
  const attributes = {};
  const regex = /([^\s=/>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let match;
  while ((match = regex.exec(tagMarkup)) !== null) {
    const key = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? '';
    attributes[key] = value;
  }
  return attributes;
}

function resolveLocalReference(reference, pagePath) {
  const cleaned = cleanReference(reference);
  if (!cleaned) {
    return null;
  }

  if (cleaned.startsWith('/International/')) {
    const rootedPath = decodeReferencePath(cleaned.slice('/International/'.length));
    const absolutePath = path.join(repoRoot, rootedPath);
    return {
      absolutePath,
      relativePath: toPosix(path.relative(repoRoot, absolutePath)),
    };
  }

  const localPath = localRelativePath(reference);
  if (!localPath) {
    return null;
  }

  if (localPath.startsWith('/')) {
    const absolutePath = path.join(repoRoot, localPath.slice(1));
    return {
      absolutePath,
      relativePath: toPosix(path.relative(repoRoot, absolutePath)),
    };
  }

  const absolutePath = path.resolve(path.dirname(pagePath), localPath);
  return {
    absolutePath,
    relativePath: toPosix(path.relative(repoRoot, absolutePath)),
  };
}

function localRelativePath(reference) {
  const cleaned = cleanReference(reference);
  if (!cleaned) {
    return null;
  }

  if (/^(?:https?:)?\/\//i.test(cleaned)) {
    return null;
  }

  if (/^(?:data|mailto|javascript|tel):/i.test(cleaned)) {
    return null;
  }

  if (cleaned.startsWith('/International/')) {
    return cleaned.slice('/International/'.length);
  }

  if (cleaned.startsWith('/')) {
    return null;
  }

  return decodeReferencePath(cleaned);
}

function cleanReference(reference) {
  const trimmed = reference.trim();
  if (!trimmed || trimmed.startsWith('#')) {
    return null;
  }

  const cleaned = trimmed.split('#')[0].split('?')[0];
  return cleaned || null;
}

function decodeReferencePath(referencePath) {
  try {
    return decodeURI(referencePath);
  } catch {
    return referencePath;
  }
}

function addIssue(relativePath, message) {
  issues.push({ relativePath, message });
}

function groupByFile(fileIssues) {
  const grouped = new Map();
  const sorted = [...fileIssues].sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  for (const issue of sorted) {
    const bucket = grouped.get(issue.relativePath) || [];
    bucket.push(issue);
    grouped.set(issue.relativePath, bucket);
  }
  return grouped;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join('/');
}

function formatToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
