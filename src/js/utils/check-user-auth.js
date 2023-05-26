import Utils from './utils';

const CheckUserAuth = {
  excludeRedirectPage: ['login.html', 'register.html'],

  checkLoginState() {
    const userToken = Utils.getUserToken();
    const isUserSignedIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignedIn) {
      if (isUserOnAuthPage) {
        window.location.href = '/';
      } else {
        this._showLoginMenuOrUserLogMenu(isUserSignedIn);
      }
    } else {
      if (!isUserOnAuthPage) {
        window.location.href = '/login.html';
      }
    }
  },

  _showLoginMenuOrUserLogMenu(userLoginState) {
    const login = document.querySelector('#login');
    const logout = document.querySelector('#logout');

    if (userLoginState) {
      logout.classList.remove('d-none');
      login.classList.add('d-none');

      //   loginMenu?.classList.remove('d-none');
      //   userLoggedMenu?.classList.remove('d-block');

      //   return;
    }

    // loginMenu?.classList.add('d-none');
    // userLoggedMenu?.classList.add('d-block');

    // loginMenu?.classList.remove('d-block');
    // userLoggedMenu?.classList.remove('d-none');
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) => window.location.pathname.endsWith(item));
    return Boolean(filteredPages.length);
  },
};

export default CheckUserAuth;
