module.exports = {

  user(user) {
    return /^[\d\uFB01\uFB02\u00AA\u00B5\u00BA\u00BF-\u1FFF\u2C00-\uD7FF\w _.]+$/.test(user);
  }

};
