/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   prism-highlight.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

declare namespace UiElements {

  /**
   * Syntax highlighting via Prism
   *
   * ### Example
   *
   * ```html
   * <prism-highlight id="c1" lang="markdown"></prism-highlight>
   * <script>
   *  document.querySelector('#c1').code = '# Test highlight';
   * &lt;/script>
   * ```
   *
   * The `lang` attribute is required and the component will not start parsing data without it.
   *
   * Changing the `lang` and `code` properties together, do it in less than 10 ms.
   * The element is set to commit changes after this time period. Otherwise it may display
   * old and new code due to the asynchronous nature of the code highlighter.
   *
   * ## Changes in version 4
   *
   * The component supports only few syntax highlighting by default. It won't
   * load other languages at runtime.The component consumer has to download definition
   * before highlighting the code.
   *
   * The component no longer uses Web Workers.
   *
   * ### Styling
   *
   * `<prism-highlight>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--prism-highlight` | Mixin applied to the element | `{}`
   * `--prism-highlight-code` | Mixin applied to the `<pre>` element | `{}`
   * `--error-color` | Color of the error message when script error ocurred in the worker | ``
   */
  class PrismHighlight extends LitElement {

    /**
     * A data to be highlighted and rendered.
     */
    code: string|null|undefined;

    /**
     * Prism supported language.
     */
    lang: string|null|undefined;
    readonly _output: any;

    /**
     * Adds languages outside of the core Prism languages.
     *
     * Prism includes a few languages in the core library:
     *   - JavaScript
     *   - Markup
     *   - CSS
     *   - C-Like
     * Use this property to extend the core set with other Prism
     * components and custom languages.
     *
     * Example:
     *   ```
     *   <!-- with languages = {'custom': myCustomPrismLang}; -->
     *   <!-- or languages = Prism.languages; -->
     *   <prism-highlighter languages="[[languages]]"></prism-highlighter>
     *   ```
     */
    languages: object;
    constructor();
    firstUpdated(): void;
    render(): any;

    /**
     * Resets the state of the display to initial state.
     */
    reset(): void;

    /**
     * Highlights the code.
     */
    _highlight(): void;
    _tokenize(code: any, lang: any): void;

    /**
     * Handler for click events.
     * It dispatches `url-change-action` custom event when a link is clicked.
     */
    _handleLinks(e: ClickEvent|null): void;
    _dispatchChangeUrl(url: any): void;
    _dispatchNewRequest(url: any): void;

    /**
     * Picks a Prism formatter based on the `lang` hint and `code`.
     *
     * @param code The source being highlighted.
     * @param lang A language hint (e.g. ````LANG`).
     */
    _detectLang(code: string, lang?: string): Prism.Lang;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "prism-highlight": UiElements.PrismHighlight;
  }
}
