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
  'ar':'Arab',
  'bg':'Bolgár',
  'da':'Dán',
  'de':'Német',
  'el':'Görög',
  'en':'Angol',
  'es':'Spanyol',
  'fr':'Francia',
  'gl':'Gallego',
  'he':'Héber',
  'hi':'Hindi',
  'hu':'Magyar',
  'it':'Olasz',
  'ja':'Japán',
  'ko':'Koreai',
  'nl':'Holland',
  'pes':'Perzsa',
  'pl':'Lengyel',
  'pt':'Portugál',
  'pt-br':'Brazíliai Portugál',
  'ro':'Román',
  'ru':'Orosz',
  'sv':'Svéd',
  'th':'Thai',
  'tr':'Török',
  'uk':'Ukrán',
  'vi':'Vietnámi',
  'zh-hans':'Egyszerűsített kínai',
  'zh-hant':'Hagyományos kínai'
}

// cookie message, appears when changing languages
s.cookieMsg = "Amennyiben hozzájárul ahhoz, hogy a böngészője elfogadjon egy sütit, a W3C Nemzetköziesítés Fejlesztési Tevékenység lapjait, ha rendelkezésre állnak, az ön által választott nyelven tudja elérni. Hozzájárul a süti használatához?" // this text is to be copied to another location

// items in top right beige column
s.worldMap = "Világtérkép"  // title text for image, top right
s.searchI18nSite = "Keresés az I18n oldalán" // placeholder text for search box, top right
s.translationDisclaimer = `A dokumentumot önkéntesek fordították. Különbségek vagy hibák esetén a <a href="${ f.filename }.en">legfrissebb, angol eredeti</a> a meghatározó. <a href="#copyright">Az eredeti szerzői jog</a> tulajdonosa a W3C, további részletek alább találhatók.`  // text appears only on translated pages

s.articles = "Articles" // used in breadcrumbs, top right of page
s.tests="Teszt" // used at the end of breadcrumbs for test related pages
s.home = "Kezdőoldal" // start of breadcrumbs
s.onThisPage = "Ezen az oldalon"  // TOC heading




// messages that appear in the top right beige column before an article is published
s.aboutThisArticle="Továbbiak a cikkről" // title in the right column near the top of the page
s.status_draft="A cikk jelenleg egy tervezet, amely még nem ment át nyilvános bírálaton. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_review="A cikk jelenleg nyilvános elbírálás alatt áll. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_published="Annak érdekében, hogy a tartalom a lehető legpontosabb legyen, a cikket a W3C Nemzetköziesítési Munkacsoportja elbírálta, és átment nyilvános bírálaton is. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_notreviewed="Ezt cikket nyilvános elbírálás nélkül publikáljuk. Ha megjegyzése van, annak elküldéséhez használja <a href='#survey'>a lap alján található linket</a>."
s.status_obsolete="Ez a cikk mára már elavult. Új verziói már nem készülnek, és valószínűleg pontatlanságokat tartalmaz. Frissebb információkért forduljon a <a href='http://www.w3.org/International/'>W3C Nemzetköziesítés Fejlesztési Tevékenység honlapjához.</a>."


// top left of page
s.gotoW3cHome = "Tovább a W3C Kezdőoldalára"  // title text for W3C logo
s.gotoI18nHome = "Tovább az Internacionalizációs Tevékenység Kezdőoldalára" // title text for i18n banner
s.internationalizationTitle = "Internacionalizációs Tevékenység"  // the word above the orange line
s.worldwide = "Hogy a Világháló valóban az egész világé lehessen!"  // the words below the orange line
s.techniques = "Módszerek"  // site links link text, top left
s.taskBasedIndex = "Feladat alapú névmutató az i18n módszerekhez."  // title text for s.techniques
s.resources = "Források"  // site links link text, top left
s.informationResources = "Információs források az oldalon."  // title text for s.resources
s.ask = "Ask"  // site links link text, top left
s.askI18nActivity = "Ask for help or information."  // title text for s.ask
s.news = "Hírek"  // site links link text, top left
s.newsFiltersAndFeeds = "Információk a hírszűrőkről és RSS feed-ekről"  // title text for s.news
s.groups = "Csoportok" // site links link text, top left
s.groupsThatMakeUp = "Csoportok akik az Internacionalizációs Tevékenységgel foglalkoznak." // title text for s.groups
s.about = "About" // site links link text, top left
s.aboutI18nActivity = "About W3C Internationalization." // title text for s.about


// document status information, below main heading
s.intendedAudience = "Célközönség:"  // preface to audience description (being faded out)
s.lastChanged = "Last changed "


// bottom right comment and news feed box
s.tellUsWhatYouThink = "Mondja el nekünk mit gondol!"  // text content
s.sendAComment = "Küldjön kommentet" // link text


// page footer
// this block of strings should include any whitespace needed after the colon
// or its equivalent, eg. "By: " in english, but "作者：" in chinese
s.sentenceDelimiter = "."  // provides a sentence terminator to use between list of authors, modifiers, & translators
s.author = "Szerző: " // followed by name of author(s)
s.previousAuthors = "Previously by: " // followed by name of previous author(s), before substantive changes were made by the current author
s.modifiedBy = "Módosítás: " // person's name appears after colon
s.translatedBy = "Fordító: " // person's name appears after colon
s.acknowledgements = "Közreműködésükért és átvett megjegyzéseikért köszönjük: " // used at bottom of page to list people who provided feedback. The list comes after this text. 
s.translatedFromEnglishVer = `Angolról fordítva: ${ dt.enVersion }. A lefordított verzió utolsó módosítása: ${ dt.thisVersionPlain } GMT`
s.translation_updated="Az új verzió dátuma:" // date appears after (add colon+whitespace) 
s.historyOfDocumentChanges = `Amennyiben a dokumentum volt változataira kíváncsi, ezek az információk elérhetők a <a href="http://www.w3.org/blog/International/tag/${ f.searchString }/">hírlevelünkön</a>, a 2016 Január óta bekövetkezett változásokról pedig a <a href="https://github.com/w3c/i18n-drafts/commits/gh-pages/${ f.directory }${ f.filename }.en.html">GitHub „<span lang="en">commit</span>” lista</a> a megfelelő forrás.`


// banner on translated pages that are missing some translation
s.untranslatedChanges = `<strong>Megjegyzés:</strong> A fordítás megjelenése óta változások történtek <a href="${ f.filename }.en">az eredeti angol változatban</a>. A változásokat átvezettük a dokumentumba, úgyhogy egyes részek, az új fordítás véglegesítéséig, angolul szerepelnek.`
s.unlinkedTranslation = `<strong>Figyelmeztetés:</strong> A fordítás megjelenése óta jelentős változások történtek az eredeti angol változatban. Tanácsoljuk, hogy az új fordítás véglegesítéséig <a href="${ f.filename }">egy más nyelven rendelkezésre álló változatot</a> olvasson.`
s.githubRedirect = `<strong>NOTE!</strong> &nbsp; This is only an editor's draft of this article. All links and bookmarks should point to the <a href='https://www.w3.org/International/${ f.directory }${ f.filename }.${ f.clang }'>version on the W3C site</a>.` // used for github-based versions of published articles


s.new="Új"// placed alongside new articles at https://www.w3.org/International/articlelist 
s.updated="Új verzió" // same as New


// strings to promote consistency in article content
s.question = "Kérdés"  // heading
s.questionAlt = "Kérdés"  // title text for s.question
s.questionLink = "Kérdés"  // 
s.skipToAnswer = "[Ugrás a válaszhoz]"  // link text
s.background = "Háttér" // heading
s.backgroundAlt = "Háttérinformáció" // title text for s.background
s.backgroundLink = "Háttér"
s.answer = "Válasz" // heading
s.answerAlt = "Válasz" // title text for s.answer
s.answerLink = "Válasz"
s.byTheWay = "Mellesleg" // heading
s.byTheWayAlt = "Hasznos kiegészítő információ" // title text for s.byTheWay
s.byTheWayLink = "Mellesleg"
s.furtherReading = "További olvasnivaló" // heading
s.furtherReadingAlt = "További olvasnivaló" // title text for s.byTheWay
s.furtherReadingLink = "További olvasnivaló"
s.quickanswer = "Gyors válasz" // heading
s.longeranswer = "Részletek" // heading that follows 'Quick answer'
s.additionalinfo = "További információ" // heading that sometimes follows 'Details'


// obsolete in most recent articles — used to be in bottom right box
s.subscribeToRSS = "Feliratkozás RSS Feed-re."  
s.newResourcesAlt = "Értesíti Önt amikor első alkalommal lett új forrás publikálva."
s.newResources = "Új források"
s.homePageNewsAlt = "Minden hír a kezdőoldalon."
s.homePageNews = "Kezdőoldal hírek"
s.followOurNews = "Kövesse hírlevelünket."

// obsolete in most recent articles — used to be in footer
s.validXHTML = "Valid XHTML 1.0!"
s.validCSS = "Valid CSS!"
s.codedInUtf8 = "UTF-8-ben kódolva!"



// other — may be obsolete, or used in old format pages
s.i18nActivityHome = "I18N Tevékenység Kezdőoldala"
s.moreResourcesOfThisType = "Több ehhez hasonló forrás."
s.accessKeyN = `Az n billentyű átugrik az <a href="#internal-links" accesskey="n">oldal navigációhoz</a>. <a href="#contentstart">Ugrás a szöveg elejére.</a>`
s.examplesInAnotherScript = "Ez a dokumentum más nyelvű példákat tartalmaz."
s.relatedLinks = "Kapcsolódó linkek"
s.techIndexText = "Módszerek"
s.topicIndexText = "Témák"
s.i18nActivityHomePage = "Internacionalizációs Tevékenység Kezdőoldala."
s.topicIndexForInformation = "Témák névmutatója az oldalon található információkhoz."
s.topics = "Témák"



/*

MISSING TRANSLATIONS

check all top left links !

articles
ask
askI18nActivity
about
aboutI18nActivity
lastChanged
previousAuthors
validXHTML
validCSS




*/