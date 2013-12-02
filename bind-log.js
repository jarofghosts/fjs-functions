module.exports = namespace

function namespace(str) {
  return log.bind(this, str)

  function log() {
    console.log([].slice.call(arguments).join(' '))
  }
}
