const Utils = {
  setUserToken(key, value) {
    return sessionStorage.setItem(key, value);
  },
  getUserToken() {
    return sessionStorage.getItem('token');
  },
  destroyUserToken(key) {
    return sessionStorage.removeItem(key);
  },
};

export default Utils;
