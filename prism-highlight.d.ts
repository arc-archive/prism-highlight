import { PrismHighlightElement } from './src/PrismHighlightElement';

declare global {
  interface HTMLElementTagNameMap {
    "prism-highlight": PrismHighlightElement;
  }
}
