module.exports = repeat

function repeat(fn, times) {
  times--
  fn()
  times && repeat(fn, times)
}
