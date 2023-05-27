import Auth from '../network/auth';
import Utils from '../utils/utils';
import CheckUserAuth from '../utils/check-user-auth';

const Login = {
  async init() {
    this._initialListener();
    CheckUserAuth.checkLoginState();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });

        const tokenFromResponse = response.data.loginResult.token;
        const nameFromResponse = response.data.loginResult.name;
        Utils.setUserToken('token', tokenFromResponse);
        Utils.setUserToken('name', nameFromResponse);

        window.alert('Signed user in detected');
        this._goToDashboardPage();
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationEmail');
    const password = document.querySelector('#validationPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Login;
