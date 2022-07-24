const validator = require('validator');

module.exports.isURL = (url) => {
  const validURL = validator.isURL(url, { require_protocol: true });
  if (validURL) {
    return url;
  }
  throw new Error('URL validation err');
};
