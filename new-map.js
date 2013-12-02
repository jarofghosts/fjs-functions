module.exports = map

function map(arr, fn) {
  return arr.reduce(function (fin, cur, idx) {
    return fin.concat(fn.call(null, cur, idx, arr))
  }, [])
}
