module.exports = countWords

function countWords(inputs) {
  return inputs.reduce(function (words, word) {
    words[word] = ++words[word] || 1
    return words
  }, {})
}
