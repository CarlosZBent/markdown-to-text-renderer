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
    // please always set these three if you set your own options
    sanitize: false,
    mangle: false,
    headerIds: false
}

let plaintext = convertMarkdownToPlainText(md_text, options)
```
> NOTE: For this conversion to plain text, it is recommended to always set the `sanitize` option to `false`, to avoid encoding issues. Besides that, `mangle` and `headerIds` should also be set to `false`, this is because these options are deprectaed, but marked still sets them to true by default. These are all set by default by this library. But if you set your own options, you'll override the default ones, so don't forget to specify `{sanitize:false, mangle:false, headerIds:false}` when adding yours.