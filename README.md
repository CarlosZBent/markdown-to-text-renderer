# markdown-to-text-renderer

A concise extension to the [marked](https://marked.js.org/) library, focused on converting text written in markdown format to plain text, reomving all special characters.

## Usage
### For basic markdown to plain text conversion:
```
import { convertMarkdownToPlainText } from "markdown-to-text-renderer";

let md_text = "Free open source software (*FOSS*) is **awesome**. Let's work together in [GitHub](https://github.com/CarlosZBent)'"

let plaintext = convertMarkdownToPlainText(md_text)
```
### Adding custom options
Marked accepts [options](https://marked.js.org/using_advanced#options) that allow the user to customize its behavior.
You can pass this options as second *optional* argument to the `convertMarkdownToPlainText()` function.
```
import { convertMarkdownToPlainText } from "markdown-to-text-renderer";

let md_text = "If you wanna be a **cool cowboy** you should play [Red Dead Redemption](https://www.rockstargames.com/reddeadredemption/)"

let options = {
    sanitize: false,
    mangle: false
}

let plaintext = convertMarkdownToPlainText(md_text, options)
```