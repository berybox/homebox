# HomeBox

A simple static web page with links to predefined addresses. It uses pure HTML/CSS/JavaScript without frameworks and without the need to use any server. The intended use is as a custom home page.

## Installation

Only the `index.html`, `index.css`, `index.js` and `index.json` or `index.json.js` files are required for the HomeBox to function properly. 
The files can be placed on almost any web server that allows static files (all common servers). If you use `index.json.js`, you can also open the pages locally (i.e., `file://` location).

## `index.json` vs. `index.json.js`
The data stored in the `index.json` file contains the JSON formatted information needed to display the page. The individual variables are listed in a separate section. The `index.json.js` file is analogous to `index.json`, but the JSON object is stored as a JavaScript variable of type string. The `index.json.js` file can be created in Windows from the `index.json` file using the `index.json.bat` script. If both files (`index.json` and `index.json.js`) are present, the `index.json.js` file will be used as the source. The main advantage of using the `index.json.js` file is that it can be loaded locally in the browser without using a server.

## JSON data source format
The source file `index.json` has two main sections `general` and `groups`. The `general` section contains general page settings in following variables:

|Variable name|Default|Description|
|---|---|---|
|`title`|"HomeBox"|Page title in the browser bar|
|`backgroundcolor`|"#d0d7df"|Background color|
|`textcolor`|"#110c75"|Text color|
|`hovercolor`|"#899eb1"|Undercolouring on mouseover|
|`iconsize`|"64px"|Size of icons for individual items|
|`fontsize`|"1.2em"|Font size of each item|
|`orientation`|"row"|Orientation of the order of the items. (`row` or `column`)|

The `groups` section is an array of variables, where each array entry represents one group of links. Each entry has a variable `name`, where the caption of the group is given, and `items`, which is again an array of variables, where each contains variables: 

- `caption` = Item label
- `address` = Link address
- `image` = Link to the item image

The `image` variable can contain relative and absolute references valid for the `src` attribute of the `<img>` HTML tag. If the image is to be retrieved from another server, the headers must be modified accordingly (typically the `Access-Control-Allow-Origin` header = `"*"`). If the value of the `image` variable starts with `badge://` a badge with the letter(s) after the slash will be used instead of the image. For example, `badge://G` will be shown as a capital **G** in a badge. In this case, you can also use custom CSS styles listed after the `|` symbol. For example, `badge://G|backgroud-color:red` will display **G** in a red badge, and so on.