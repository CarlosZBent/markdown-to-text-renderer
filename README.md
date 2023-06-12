# markdown-to-text-renderer

A concise extension to the [marked](https://marked.js.org/) library, focused on converting text written in markdown format to plain text, removing all special characters.

## Usage 1 - Markdown to plain text conversion
### For basic markdown to plain text conversion:
```
import { convertMarkdownToPlainText } from "markdown-to-text-renderer";

let md_text = "Free open source software (*FOSS*) is **awesome**. Let's work together in [GitHub](https://github.com/CarlosZBent)'"

let plaintext = convertMarkdownToPlainText(md_text)
```
### Adding custom options
Marked accepts [options](https://marked.js.org/using_advanced#options) that allow the user to customize its behavior.
You can pass this options as second *optional* argument to the `convertMarkdownToPlainText()` function.
> NOTE: For this conversion to plain text, it is recommended to always set the `sanitize` option to `false`, to avoid encoding issues. Besides that, `mangle` and `headerIds` should also be set to `false`, this is because these options are deprectaed, but marked still sets them to true by default. These are all set by default by this library. But if you set your own options, you'll override the default ones, so don't forget to specify `{sanitize:false, mangle:false, headerIds:false}` when adding yours.
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

console.log(plaintext)
> If you wanna be a cool cowboy you should play Red Dead Redemption
```
***
## Usage 2 - Converting ASCII HTML numbers and codes to text
Some special characters, such as "&" or "$", could end up being rendered as ASCII HTML Numbers or Codes after their conversion. In this case, the text "The Knicks & the Mets are from New York" would be rendered as "The Knicks \&amp; the Mets are from New York"

To solve this you can use the `convertASCIICharsToText()` function.
```
import { convertASCIICharsToText } from "markdown-to-text-renderer";

let specialCharsString = "The Bucks &amp; the Brewers are from Milwaukee"

let convertedString = convertASCIICharsToText(specialCharsString)

console.log(convertedString)
> The Bucks & the Brewers are from Milwaukee
```