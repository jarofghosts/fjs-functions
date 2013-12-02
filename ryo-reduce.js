module.exports = reduce

function reduce(arr, fn, init, idx) {
  idx = idx || 0
  if (arr.length === idx) return init
  init = fn(init, arr[idx], idx, arr)
  return reduce(arr, fn, init, ++idx)
}
