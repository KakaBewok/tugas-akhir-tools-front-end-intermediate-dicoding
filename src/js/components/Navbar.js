import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class Navbar extends LitNoShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg px-4 mt-5">
        <a class="navbar-brand fw-bold fs-4" href="/">StoryApp</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav fw-bold">
            <li class="nav-item active">
              <a class="nav-link" href="/">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/add.html">Add Story</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
