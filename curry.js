module.exports = curryN

function curryN(fn, num) {
  num = num || fn.length
  function do_curry(new_args) {
    new_args = new_args || []
    return function(arg) {
      all_args = new_args.concat(arg)
      if (all_args.length === num) return fn.apply(this, all_args)
      return do_curry(all_args)
    }
  }
  return do_curry()
}
