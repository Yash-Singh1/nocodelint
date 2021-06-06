/**
 * The main function for the linter
 * @param {string} value The value to lint
 * @returns {boolean} Whether the linter succeeded or not
 */
module.exports = function nocodelint(value) {
  if (value.length === 0) {
    return true;
  } else {
    return false;
  }
};
