const {
  asin,
  isbn,
  version,
  license,
  repository,
  description: title,
  authors,
} = require("./package.json");

module.exports = {
  meta: {
    version: "1.0.0",
    type: "ewer:ebook",
  },
  general: {
    bookTypesToUpload: ["rtf"],
  },
  metadata: {
    title,
    authors,
    outputProfile: "kindle",
    bookProducer: "ewer",
    comments: license,
    isbn,
    pubdate: "<DATE>",
    publisher: "<Add an publisher>",
  },
  additionalMetadata: {
    asin,
    version,
    license,
    repository,
    rawBookUrl:
      "Place a url here or let it be fill automatically with uploaded books",
    stripHeadlinesAndFormatsFrom: ["rtf", "txt"],
  },
  lookAndFeel: {
    extraCss: `${__dirname}/media/global.css`,
    embedAllFonts: true,
    lineHeight: 22,
    changeJustification: "justify",
  },
  txtInputOptions: {
    formattingType: "markdown",
  },
  mobiOutputOptions: {
    mobiFileType: "both",
  },
  epubOutputOptions: {},
  azw3OutputOptions: {
    prettyPrint: true,
  },
  pdfOutputOptions: {
    paperSize: "a5",
    pdfPageNumbers: true,
    prettyPrint: true,
    pdfDefaultFontSize: 13,
    pdfAddToc: true,
    pdfHyphenate: true,
    pdfOddEvenOffset: 10,
    pdfPageMarginTop: 48.0,
    pdfPageMarginBottom: 48.0,
    pdfPageMarginLeft: 72.0,
    pdfPageMarginRight: 72.0,
  },
  txtOutputOptions: {
    forceMaxLineLength: null,
    inlineToc: false,
    keepColor: false,
    keepImageReferences: false,
    keepLinks: false,
    prettyPrint: true,
    txtOutputFormatting: "plain",
  },
  rtfOutputOptions: {
    prettyPrint: true,
  },
  tableOfContents: {
    // tocTitle: "Inhalt",
    // level1Toc: "//h:h1",
    // level2Toc: '//h:h2',
    // level3Toc: '//h:h5',
    // useAutoToc: true,
  },
};
