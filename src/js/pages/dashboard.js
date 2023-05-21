const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._listStory = responseRecords.listStory;

    this._populateListStoryCard(this._listStory);
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

      const card = `<card-story
                      id=${id}
                      photoUrl=${photoUrl}
                      name="${name}"
                      description="${description}"
                    ></card-story>
                    `;

      cardWrapper.innerHTML += card;
    });
  },
};

export default Dashboard;
