import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

import Utils from '../utils/utils';
import CheckUserAuth from '../utils/check-user-auth';

class Navbar extends LitNoShadowDom {
  static properties = {
    userLogin: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.userLogin = sessionStorage.getItem('name');
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken('token');
    Utils.destroyUserToken('name');
    CheckUserAuth.checkLoginState();
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
            <li class="nav-item" id="login">
              <a class="nav-link" href="/login.html">Login</a>
            </li>
            <li class="nav-item d-none" id="logout">
              <a class="nav-link" href="/login.html" @click=${this._userLogOut}
                >Logout
                <span class="fs-6 fw-light">(${this.userLogin ? this.userLogin : ''})</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
