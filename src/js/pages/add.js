import CheckUserAuth from '../utils/check-user-auth';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();

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

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      //   const postData = async (url, data) => {
      //     try {
      //       const response = await fetch(url, {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(data),
      //       });

      //       if (!response.ok) {
      //         throw new Error(response.status);
      //       }
      //       const responseData = await response.json();
      //       console.log(responseData);
      //       return responseData;
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   };

      //   const apiUrl = '/data/DATA.json';
      //   const data = { ...formData, photoUrl: formData.photoUrl.name };

      //   postData(apiUrl, data);

      const dataForm = { ...formData, photoUrl: formData.photoUrl.name };

      console.log(dataForm);
      alert(JSON.stringify(dataForm));

      //redirect to dashboard page
      // this._goToDashboardPage();

      this._emptyFormData();
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#validationName');
    const storyInput = document.querySelector('#validationStory');
    const imageInput = document.querySelector('#validationImage');

    return {
      name: nameInput.value,
      description: storyInput.value,
      photoUrl: imageInput.files[0],
    };
  },

  _emptyFormData() {
    const nameInput = document.querySelector('#validationName');
    const storyInput = document.querySelector('#validationStory');
    const imageInput = document.querySelector('#validationImage');

    location.reload();

    return {
      name: (nameInput.value = ''),
      description: (storyInput.value = ''),
      photoUrl: (imageInput.files[0] = {}),
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

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;
