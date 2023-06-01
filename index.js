import { marked } from "marked";
import { PlainTextRenderer } from "./PlainTextRenderer.js";

let defaultOptions = {
  sanitize: false,
  mangle: false,
  headerIds: false
}

function convertMarkdownToPlainText(markdownText, markedOptions = defaultOptions) {
    const renderer = new PlainTextRenderer();
    marked.setOptions(markedOptions);
    return marked(markdownText, { renderer })
  }

function __convertASCIINamesToText(str) {
  // convert HTML Names (eg. "&amp;" => "&")
  /* every HTMLName replacement needs to be a 
  separate statement, because string.replace() 
  can only replace one value at a time.*/
  let replaceAmp = str.replaceAll("&quot;", '"');
  let replaceQuot = replaceAmp.replaceAll("&amp;", "&");
  let convertedHTMLNames = replaceQuot;
  return convertedHTMLNames
}

function __convertASCIINumbersToText(str) {
  // convert HTML Numbers (eg. "&#36;" => $)
  return str.replace(/&#(\d+);/g, (match, code) => {
    let convertedHTMLNumbers = String.fromCharCode(Number(code));
    return convertedHTMLNumbers
  });
}

function convertASCIICharsToText(str) {
  let conversion1 = __convertASCIINamesToText(str);
  let conversion2 = __convertASCIINumbersToText(conversion1);
  let processedString = conversion2;
  return processedString
}


export { convertMarkdownToPlainText, convertASCIICharsToText }