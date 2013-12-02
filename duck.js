module.exports = duckCount

function duckCount() {
  return [].slice.call(arguments).filter(function(obj) {
    return Object.hasOwnProperty.call(obj, 'quack')
  }).length
}
