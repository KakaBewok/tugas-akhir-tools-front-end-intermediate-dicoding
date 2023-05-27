import CheckUserAuth from '../utils/check-user-auth';
import Transactions from '../network/transactions';

const Dashboard = {
  async init() {
    CheckUserAuth.checkLoginState();

    await this._initialData();
    this._loadingIndicator();
  },

  async _initialData() {
    try {
      const response = await Transactions.getAll();
      const responseRecords = response.data.listStory;
      this._listStory = responseRecords;
      this._populateListStoryCard(this._listStory);
    } catch (error) {
      console.error(error);
    }
  },

  _populateListStoryCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(`Parameter listStory should be an object.`);
    }

    if (!Array.isArray(listStory)) {
      throw new Error('Parameter listStory should be an array.');
    }

    const cardWrapper = document.querySelector('.card-wrapper');

    listStory.forEach((data) => {
      const { id, name, description, photoUrl } = data;

      const card = `
                    <card-story 
                      id=${id}
                      name=${name}
                      photoUrl=${photoUrl}
                      description="${description}"
                    ></card-story>
                    `;

      cardWrapper.innerHTML += card;
    });
  },

  //edit
  _populateDetailTransactionToModal(transactionRecord) {
    if (!(typeof transactionRecord === 'object')) {
      throw new Error(
        `Parameter transactionRecord should be an object. The value is ${transactionRecord}`,
      );
    }

    const imgDetailRecord = document.querySelector('#recordDetailModal #imgDetailRecord');
    const typeDetailRecord = document.querySelector('#recordDetailModal #typeDetailRecord');
    const nameDetailRecord = document.querySelector('#recordDetailModal #nameDetailRecord');
    const dateDetailRecord = document.querySelector('#recordDetailModal #dateDetailRecord');
    const amountDetailRecord = document.querySelector('#recordDetailModal #amountDetailRecord');
    const descriptionDetailRecord = document.querySelector('#recordDetailModal #noteDetailRecord');

    imgDetailRecord.setAttribute('src', transactionRecord.evidenceUrl);
    imgDetailRecord.setAttribute('alt', transactionRecord.name);
    Transactions.getEvidenceURL(transactionRecord.evidence)
      .then((url) => {
        imgDetailRecord.setAttribute('src', url);
        imgDetailRecord.setAttribute('alt', transactionRecord.name);
      })
      .catch((error) => {
        console.error(error);
      });

    typeDetailRecord.textContent =
      transactionRecord.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
    nameDetailRecord.textContent = transactionRecord.name;
    dateDetailRecord.textContent = transactionRecord.date.toDate().toDateString();
    amountDetailRecord.textContent = transactionRecord.amount;
    descriptionDetailRecord.textContent = transactionRecord.description || '-';
  },

  _loadingIndicator() {
    const cardImg = document.querySelector('#card-img');
    const loadingElem = document.querySelectorAll('#loading-img');

    cardImg.addEventListener('load', () => {
      loadingElem.forEach((elem) => elem.classList.add('d-none'));
    });
  },
};

export default Dashboard;
