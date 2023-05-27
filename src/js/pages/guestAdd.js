import Transactions from '../network/transactions';

const GuestAdd = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const photoInput = document.querySelector('#validationImage');
    photoInput.addEventListener('change', () => {
      this._updatePhotoPreview();
    });

    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Transactions.storeAsguest(formData);
        window.alert('New story added as Guest successfully');
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const storyInput = document.querySelector('#validationStory');
    const imageInput = document.querySelector('#validationImage');

    return {
      description: storyInput.value,
      photo: imageInput.files[0],
    };
  },

  _updatePhotoPreview() {
    const storyImgChange = document.querySelector('#validationImageChange');
    const storyImgInput = document.querySelector('#validationImage');
    const templateImagePreview = document.querySelector('#templatePreview');

    const photo = storyImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      storyImgChange.classList.remove('d-none');
      storyImgChange.style.backgroundImage = `url('${event.target.result}')`;
      templateImagePreview.classList.add('d-none');
    };

    reader.readAsDataURL(photo);
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },
};

export default GuestAdd;
