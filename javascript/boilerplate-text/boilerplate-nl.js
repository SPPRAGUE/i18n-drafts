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
  'ar':'Arabisch',
  'bg':'Bulgaars',
  'da':'Deens',
  'de':'Duits',
  'el':'Grieks',
  'en':'Engels',
  'es':'Spaans',
  'fr':'Frans',
  'gl':'Galicisch',
  'he':'Hebreeuws',
  'hi':'Hindi',
  'hu':'Hongaars',
  'it':'Italiaans',
  'ja':'Japans',
  'ko':'Koreaans',
  'nl':'Nederlands',
  'pes':'Perzisch',
  'pl':'Pools',
  'pt':'Portugees',
  'pt-br':'Braziliaans Portugees',
  'ro':'Roemeens',
  'ru':'Russisch',
  'sv':'Zweeds',
  'th':'Thai',
  'tr':'Turks',
  'uk':'Oekraïens',
  'vi':'Vietnamees',
  'zh-hans':'Vereenvoudigd Chinees',
  'zh-hant':'Traditioneel Chinees'
}

// cookie message, appears when changing languages
s.cookieMsg = "If you let the browser set a cookie, you will continue to see W3C Internationalization Activity pages (where available) in the language you chose. Do you want to set the cookie?" // this text is to be copied to another location

// items in top right beige column
s.worldMap = "Wereldkaart"  // title text for image, top right
s.searchI18nSite = "Zoeken op de I18n site:" // placeholder text for search box, top right
s.translationDisclaimer = `Dit document is een vertaling. In geval van afwijkingen of fouten, dient het <a href="${ f.filename }.en">meest recente origineel in het Engels</a> dient als referentie te worden beschouwd. <a href="#copyright">Het origineel copyright</a> is eigendom van W3C, zoals hieronder getoond.`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Tests" // used at the end of breadcrumbs for test related pages
s.home = "Thuispagina" // start of breadcrumbs
s.onThisPage = "Op deze pagina"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="About this article" // title in the right column near the top of the page
s.status_draft="This article is a draft that has not yet gone through public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_review="This article is currently out for public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_published="This article has been reviewed by the W3C Internationalization Working Group and has gone through public review to make it as accurate as possible. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_notreviewed="This article was published without public review. If you have comments, please send them using the <a href='#survey'>link near the bottom of this page</a>."
s.status_obsolete="This article is now obsolete. It is no longer maintained and is likely to be inaccurate. For more up-to-date information, see the <a href='http://www.w3.org/International/'>Internationalization Activity home page</a>."


// top left of page
s.gotoW3cHome = "Ga naar de Thuispagina van W3C"  // title text for W3C logo
s.gotoI18nHome = "Go naar de Thuispagina van Internationalization Activity" // title text for i18n banner
s.internationalizationTitle = "Internationalization"  // the word above the orange line
s.worldwide = "Making the World Wide Web worldwide!"  // the words below the orange line
s.techniques = "Leren"  // site links link text, top left
s.taskBasedIndex = "Leer technieken en vereisten voor internationalisatie."  // title text for s.techniques
s.resources = "Vind"  // site links link text, top left
s.informationResources = "Vind informatie op deze site."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Volg"  // site links link text, top left
s.newsFiltersAndFeeds = "Volg het werk van W3C's Internationalisatie."  // title text for s.news
s.groups = "Deelnemen" // site links link text, top left
s.groupsThatMakeUp = "Deelnemen aan W3C's Internationalisatiewerk." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Doelpubliek:"  // preface to audience description (being faded out)
s.lastChanged = "undefined"


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Vertel ons wat u ervan denkt (Engels)."  // text content
s.sendAComment = "Stuur ons een opmerking" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "By: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Gewijzigd door: " // person's name appears after colon
s.translatedBy = "Vertaler: " // person's name appears after colon
s.acknowledgements = "Thanks also to the following people whose contribution or feedback was included: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Vertaald vanuit de Engelse inhoud met datum ${ dt.enVersion }. Vertaalde versie laatst gewijzigd op  ${ dt.thisVersionPlain } GMT`
s.translation_updated="Translation updated:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `For the history of document changes, see the <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">news feed</a> for substantive changes, and the <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">Github commit list</a> for all changes since Jan 2016.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Opmerking:</strong> Er zijn veranderingen aangebracht in <a href="${ f.filename }.en">het Engelse origineel</a> sinds dit document werd vertaald. The changes were incorporated into this page, so you may see some passages in English until the translation is updated.`
s.unlinkedTranslation = `<strong>Warning:</strong> Substantive changes have been made to the English original since this document was translated. You are advised to read <a href="${ f.filename }">a version in another language</a> until this translation has been updated.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>, rather than to this page.` // used for github-based versions of published articles


s.new="New"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Updated" // same as New


// strings to promote consistency in article content
s.question = "Vraag"  // heading
s.questionAlt = "Vraag"  // title text for s.question
s.questionLink = "Vraag"  // 
s.skipToAnswer = "[Verder naar antwoord]"  // link text
s.background = "Achtergrond" // heading
s.backgroundAlt = "Achtergrondinformatie" // title text for s.background
s.backgroundLink = "Achtergrond"
s.answer = "Antwoord" // heading
s.answerAlt = "Antwoord" // title text for s.answer
s.answerLink = "Antwoord"
s.byTheWay = "Trouwens" // heading
s.byTheWayAlt = "Nuttige informatie" // title text for s.byTheWay
s.byTheWayLink = "Trouwens"
s.furtherReading = "Aanbevolen lectuur" // heading
s.furtherReadingAlt = "Aanbevolen lectuur" // title text for s.byTheWay
s.furtherReadingLink = "Aanbevolen lectuur"
s.quickanswer = "Quick answer" // heading
s.longeranswer = "Details" // heading that follows 'Quick answer'
s.additionalinfo = "Additional information" // heading that sometimes follows 'Details'


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Abonneer u op een RSS-feed."  
s.newResourcesAlt = "Brengt u op de hoogte telkens wanneer een nieuwe bron voor de eerste keer wordt gepubliceerd."
s.newResources = "Nieuwe bronnen"
s.homePageNewsAlt = "Alle nieuwe items worden getoond op de thuispagina."
s.homePageNews = "Thuispaginanieuws"
s.followOurNews = "Follow our news feed."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Geldige XHTML 1.0!"
s.validCSS = "Geldige CSS!"
s.codedInUtf8 = "Gecodeerd in UTF-8!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N Activity Home"
s.moreResourcesOfThisType = "More resources of this type."
s.accessKeyN = `Met de sneltoets n gaat u rechtstreeks naar <a href="#internal-links" accesskey="n">navigatie binnen de pagina</a>. <a href="#contentstart">Naar begin van de inhoud gaan.</a>`
s.examplesInAnotherScript = "Dit document bevat voorbeelden in een andere taal/script."
s.relatedLinks = "Gerelateerde links"
s.techIndexText = "Techniekindex"
s.topicIndexText = "Onderwerpsindex"
s.i18nActivityHomePage = "De thuispagina van Internationalization Activity."
s.topicIndexForInformation = "Doorzoek deze site."
s.topics = "Doorzoek"



/*

MISSING TRANSLATIONS

check all top left links !

cookieMsg
articles
tests
aboutThisArticle
status_draft
status_review
status_published
status_notreviewed
status_obsolete
worldwide
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
author
previousAuthors
acknowledgements
translation_updated
historyOfDocumentChanges
untranslatedChanges
unlinkedTranslation
githubRedirect
new
updated
quickanswer
longeranswer
additionalinfo
followOurNews
i18nActivityHome
moreResourcesOfThisType




*/