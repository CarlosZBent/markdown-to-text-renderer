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

export { convertMarkdownToPlainText }