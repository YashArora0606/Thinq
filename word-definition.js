var wd = require("word-definition");

module.exports = input => {
  input = input.substring(7)
  return new Promise((resolve, reject) =>
  wd.getDef(input, "en", null, resolve))
  .then(({ word, definition }) => ((definition) ? `Definition of ${word}: ${definition}` : null))
}
