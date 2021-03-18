# prism-highlight

Syntax highlighting with Prism JS library

[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/prism-highlight.svg)](https://www.npmjs.com/package/@advanced-rest-client/prism-highlight)

[![Tests and publishing](https://github.com/advanced-rest-client/prism-highlight/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/prism-highlight/actions/workflows/deployment.yml)

```html
<prism-highlight id="c2" lang="javascript"></prism-highlight>
<script>
document.querySelector('#c2').code = 'function(param) {\n' +
  '  param.forEach((item) => this._parseItem(item))\n' +
  '  const test = null;\n' +
  '}';
</script>
```

## Usage

### Installation

```sh
npm install --save @advanced-rest-client/prism-highlight
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/prism-highlight/prism-highlight.js';
    </script>
  </head>
  <body>
    <prism-highlight></prism-highlight>
  </body>
</html>
```

### In a LitElement template

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/prism-highlight/prism-highlight.js';

class SampleElement extends LitElement {

  render() {
    return html`
    <prism-highlight .code="${this.code}" .lang="${this.lang}"></prism-highlight>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/prism-highlight/prism-highlight.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <prism-highlight></prism-highlight>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/prism-highlight
cd prism-highlight
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```

## Changes in version 4

- The component supports only few syntax highlighting by default. It won't load other languages at runtime. The component consumer has to download definition before highlighting the code.
- The component no longer uses Web Workers.
- Replaced Polymer with LitElement
