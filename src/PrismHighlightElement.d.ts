import { LitElement, TemplateResult, CSSResult } from 'lit-element';

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
 * @fires url-change-action
 */
export class PrismHighlightElement extends LitElement {
   get styles(): CSSResult[];

  render(): TemplateResult;

  _highlightedTemplate(): TemplateResult;

  _rawTemplate(): TemplateResult;

  /**
   * A data to be highlighted and rendered.
   * @attribute
   */
  code: string;
  /**
  * Prism supported language.
  * @attribute
  */
  lang: string;
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
  languages: any;
  /** 
  * When set it ignores syntax highlighting and only renders the code.
  * @attribute
  */
  raw: boolean;

  get _output(): HTMLElement;

  constructor();

  firstUpdated(): void;

  // Resets the state of the display to initial state.
  reset(): void;
  
  /**
   * Highlights the code.
   */
  _highlight(): void;

  _tokenize(code: string, lang: string): void;

  /**
   * Handler for click events.
   * It dispatches `url-change-action` custom event when a link is clicked.
   */
  _handleLinks(e: MouseEvent): void;

  _dispatchChangeUrl(url: string): void;

  _dispatchNewRequest(url: string): void;

  /**
   * Picks a Prism formatter based on the `lang` hint and `code`.
   *
   * @param code The source being highlighted.
   * @param lang A language hint (e.g. ````LANG`).
   */
  _detectLang(code: string, lang?: string): any;
}
