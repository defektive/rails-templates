var LOGGED_IN = false;

export default {
  setLoggedIn: function (loggedIn) {
    LOGGED_IN = loggedIn
  },

  loggedIn: function () {
    return LOGGED_IN;
  },
  getToken: function () {
    return "I am a token";
  }
};
