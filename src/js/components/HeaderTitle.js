import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class HeaderTitle extends LitNoShadowDom {
  static properties = {
    content: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.content = '';
  }

  render() {
    return html`
      <div class="title">
        <h3 class="fw-bold fs-4">${this.content}</h3>
        <p class="fs-6">Create your sweet memory</p>
      </div>
    `;
  }
}

customElements.define('header-title', HeaderTitle);
