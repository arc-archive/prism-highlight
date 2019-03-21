const $documentContainer = document.createElement('template');
$documentContainer.innerHTML = `<dom-module id="prism-styles">
  <template>
    <style>
    /**
     * prism.js default theme for JavaScript, CSS and HTML
     * Based on dabblet (http://dabblet.com)
     * @author Lea Verou
     */
    code[class*="language-"],
    pre[class*="language-"] {
      white-space: pre-wrap;
      word-spacing: normal;
      word-break: break-all;
      word-wrap: break-word;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      hyphens: auto;
      background-color: var(--prism-container-background-color);
      display: block;
      font-family: var(--arc-font-code-family, monospace);
      font-size: var(--arc-font-code-font-size, 10pt);
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"]::-moz-selection {
      text-shadow: none;
      background: var(--prism-container-selection-background-color, #b3d4fc);
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"]::selection,
    code[class*="language-"]::selection,
    code[class*="language-"]::selection {
      text-shadow: none;
      background: var(--prism-container-selection-background-color, #b3d4fc);
    }

    @media print {
      code[class*="language-"],
      pre[class*="language-"] {
        text-shadow: none;
      }
    }
    /* Code blocks */

    pre[class*="language-"] {
      padding: 1em;
      margin: .5em 0;
      overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #f5f2f0;
    }
    /* Inline code */

    :not(pre) > code[class*="language-"] {
      padding: .1em;
      border-radius: .3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: var(--code-punctuation-value-color, #999);
    }

    .namespace {
      opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: var(--code-property-value-color, #905);
    }

    .token.number {
      color: var(--code-type-number-value-color, #905);
    }

    .token.boolean {
      color: var(--code-type-boolean-value-color, #905);
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: var(--code-type-text-value-color, #690);
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #a67f59;
      background: hsla(0, 0%, 100%, .5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: var(--code-keyword-value-color, #07a);
    }

    .token.function {
      color: var(--code-function-value-color, #DD4A68);
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: var(--code-variable-value-color, #e90);
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($documentContainer.content);
