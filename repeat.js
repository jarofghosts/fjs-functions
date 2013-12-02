function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return setImmediate(repeat.bind(this, operation, --num))
}

module.exports = repeat
