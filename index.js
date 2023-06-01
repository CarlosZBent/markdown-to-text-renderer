import { marked } from "marked";
import { PlainTextRenderer } from "./PlainTextRenderer";

function convertMarkdownToPlainText(markdownText, marked_options) {
    const renderer = new PlainTextRenderer();
    marked.setOptions(marked_options);
    return marked(markdownText, { renderer })
  }

export { convertMarkdownToPlainText }