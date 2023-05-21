import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class ButtonLink extends LitNoShadowDom {
  static properties = {
    to: { type: String, reflect: true },
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`The "to" attribute must be applied to the element ${this.localName}`);
    }

    if (!this.hasAttribute('content')) {
      throw new Error(`The "content" attribute must be applied to the element ${this.localName}`);
    }
  }

  render() {
    return html`
      <button type="button" class="btn btn-primary fs-6">
        <a href=${this.to} style="text-decoration: none; color: white">${this.content}</a>
      </button>
    `;
  }
}

customElements.define('button-link', ButtonLink);
