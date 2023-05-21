import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class FooterApp extends LitNoShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <footer class="footer d-flex justify-content-center align-items-center">
        <span>Noprizal - 2023</span>
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
