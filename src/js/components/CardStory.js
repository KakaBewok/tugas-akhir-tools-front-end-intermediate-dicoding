import { html } from 'lit';
import LitNoShadowDom from './base/LitNoShadowDom';

class CardStory extends LitNoShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    class: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.name = '';
    this.id = '';
    this.photoUrl = '';
    this.description = '';
    this.class = 'h-100';
  }

  render() {
    return html`
      <div class="grid-item ${this.class}" id="cards">
        <div class="card ${this.class}" style="width: 18rem id=${this.id}">
          <div class="mx-auto" id="loading-img">
            <span>Loading...</span>
          </div>
          <img src=${this.photoUrl} id="card-img" class="card-img-top ${this.class}" alt="story" />
          <h4 class="card-title fw-bold mt-3 ms-3">${this.name}</h4>
          <div class="card-body">
            <p class="card-text ${this.class}">${this.description}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-story', CardStory);

{
  /* <button class="btn btn-primary m-3">Detail</button> */
}
