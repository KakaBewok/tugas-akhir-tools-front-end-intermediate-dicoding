import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ModalStory extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Story</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="card h-100" style="width: 18rem id=${this.id}">
              <div class="mx-auto" id="loading-img">
                <span>Loading...</span>
              </div>
              <img src=${this.photoUrl} id="card-img" class="card-img-top h-100" alt="story" />
              <h4 class="card-title fw-bold mt-3 ms-3">${this.name}</h4>
              <div class="card-body">
                <p class="card-text h-100">${this.description}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-story', ModalStory);

{
  /* <table>
<tbody>
  <tr>
    <td class="fw-bold">${msg(`Tipe`)}</td>
    <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
    <td id="typeDetailRecord"></td>
  </tr>
  <tr>
    <td class="fw-bold">${msg(`Nama`)}</td>
    <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
    <td id="nameDetailRecord"></td>
  </tr>
  <tr>
    <td class="fw-bold">${msg(`Tanggal`)}</td>
    <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
    <td id="dateDetailRecord"></td>
  </tr>
  <tr>
    <td class="fw-bold">${msg(`Jumlah Uang`)}</td>
    <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
    <td id="amountDetailRecord"></td>
  </tr>
  <tr>
    <td class="fw-bold">${msg(`Catatan`)}</td>
    <td class="fw-bold ms-3 me-1 d-inline-block">:</td>
    <td id="noteDetailRecord"></td>
  </tr>
</tbody>
</table> */
}
