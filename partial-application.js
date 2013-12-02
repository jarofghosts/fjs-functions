module.exports = namespace

function namespace(str) {
  return partial_apply(log, str)
}

function log() {
  console.log([].slice.call(arguments).join(' '))
}

function partial_apply(fn) {
  var args = [].slice.call(arguments, 1)
  return function() {
    return fn.apply(null, args.concat([].slice.call(arguments)))
  }
}
