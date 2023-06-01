import { marked } from "marked";
import { PlainTextRenderer } from "./PlainTextRenderer";

let defaultOptions = {
  sanitize: false
}

function convertMarkdownToPlainText(markdownText, markedOptions = defaultOptions) {
    const renderer = new PlainTextRenderer();
    marked.setOptions(markedOptions);
    return marked(markdownText, { renderer })
  }

export { convertMarkdownToPlainText }