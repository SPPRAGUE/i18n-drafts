// translate the text between quotes
// text following double slashes (such as this line) provides comments for the translator
// words beginning with s. or f. are variables - do not disturb these ! (though you can move them)
// where it would aid clarity, variables that occur in the text are described below

var s = { }

// DO NOT TRANSLATE
s.suppStylesheets = ''

s.rtlAttribute = ""
s.ltrAttribute = ""
s.rlm = ""

// TRANSLATE THE FOLLOWING
// but do not translate anything inside ${...} – but do move those items where needed to fit the syntax of the translation


// used when changing the language of the page
// do not translate the abbreviation at the start of the line, just translate the language name

s.currLang = {
  'ar':'阿拉伯文',
  'bg':'保加利亞文',
  'da':'丹麥文',
  'de':'德文',
  'el':'希臘文',
  'en':'英文',
  'es':'西班牙文',
  'fr':'法文',
  'gl':'加利西亞文',
  'he':'希伯來文',
  'hi':'北印度文',
  'hu':'匈牙利文',
  'it':'義大利文',
  'ja':'日文',
  'ko':'韓文',
  'nl':'荷蘭文',
  'pes':'波斯語',
  'pl':'波蘭文',
  'pt':'葡萄牙文',
  'pt-br':'葡萄牙文',
  'ro':'羅馬尼亞文',
  'ru':'俄文',
  'sv':'瑞典文',
  'th':'泰文',
  'tr':'土耳其文',
  'uk':'烏克蘭文',
  'vi':'越南語',
  'zh-hans':'簡體中文',
  'zh-hant':'繁體中文'
}

// cookie message, appears when changing languages
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location

// items in top right beige column
s.worldMap = "世界地圖"  // title text for image, top right
s.searchI18nSite = "I18n 網站搜索" // placeholder text for search box, top right
s.translationDisclaimer = `此文檔為翻譯。如有不同或錯誤<a href="${ f.filename }.en">最新的英語原文</a> 應為依照標準.原始版權屬于 W3C, 文件内容翻譯如下所示.`  // text appears only on translated pages

s.articles = "文章" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "主頁" // start of breadcrumbs
s.onThisPage = "在此頁"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="關於本文" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "回到 W3C 主頁"  // title text for W3C logo
s.gotoI18nHome = "回到國際化活動主頁" // title text for i18n banner
s.internationalizationTitle = "國際化"  // the word above the orange line
s.worldwide = "締造真正全球通行的萬維網"  // the words below the orange line
s.techniques = "技術"  // site links link text, top left
s.taskBasedIndex = "i18n 技術項目索引"  // title text for s.techniques
s.resources = "資源"  // site links link text, top left
s.informationResources = "國際化網站信息資源"  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "新聞"  // site links link text, top left
s.newsFiltersAndFeeds = "關於W3C國際化新聞過濾和RSS feeds 的内容"  // title text for s.news
s.groups = "小組" // site links link text, top left
s.groupsThatMakeUp = "國際化活動的小組" // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "目標讀者:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "給我們回饋意見 (英文)."  // text content
s.sendAComment = "遞交您的意見" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "作者：" // followed by name of author(s)
s.previousAuthors = "前作者：" // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "修改：" // person's name appears after colon
s.translatedBy = "翻譯：" // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `從 ${ dt.enVersion } 英文文件翻譯而來. 翻譯版本 ${ dt.thisVersionPlain } GMT`
s.translation_updated="更新譯本:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>注意:</strong> 在此文件翻譯以後<a href="${ f.filename }.en">英文版本</a> 已有改變。 The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }.en">the English version</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="新"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="更新：" // same as New


// strings to promote consistency in article content
s.question = "問題"  // heading
s.questionAlt = "問題"  // title text for s.question
s.questionLink = "問題"  // 
s.skipToAnswer = "[跳至答案]"  // link text
s.background = "背景" // heading
s.backgroundAlt = "背景信息" // title text for s.background
s.backgroundLink = "背景"
s.answer = "回答" // heading
s.answerAlt = "回答" // title text for s.answer
s.answerLink = "回答"
s.byTheWay = "另外" // heading
s.byTheWayAlt = "其他有用信息" // title text for s.byTheWay
s.byTheWayLink = "另外"
s.furtherReading = "更多閲讀資料" // heading
s.furtherReadingAlt = "更多閲讀資料" // title text for s.byTheWay
s.furtherReadingLink = "更多閲讀資料"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "訂閲 RSS feed."  
s.newResourcesAlt = "當每次新資源第一次發表時通知您"
s.newResources = "新資源"
s.homePageNewsAlt = "在主頁現實的所有新聞内容"
s.homePageNews = "主頁新聞 "
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "有效的 XHTML 1.0!"
s.validCSS = "有效的 CSS!"
s.codedInUtf8 = "UTF-8! 編碼"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N 活動主頁"
s.moreResourcesOfThisType = "更多此類資源"
s.accessKeyN = `n 鍵跳至 <a href="#internal-links" accesskey="n">内頁瀏覽</a>. <a href="#contentstart">跳至内容</a>`
s.examplesInAnotherScript = "此文檔包含其他語言/程式的例子"
s.relatedLinks = "相關鏈接"
s.techIndexText = "技術索引"
s.topicIndexText = "内容索引"
s.i18nActivityHomePage = "國際化活動主頁."
s.topicIndexForInformation = "此網站信息内容索引"
s.topics = "内容"



/*

MISSING TRANSLATIONS

cookieMsg
tests
status_draft
status_review
status_published
status_notreviewed
status_obsolete

ask
askI18nActivity
about
aboutI18nActivity
lastChanged
acknowledgements
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
quickanswer
longeranswer
additionalinfo
followOurNews



*/