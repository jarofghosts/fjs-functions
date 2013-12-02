module.exports = Spy

function Spy(obj, method) {
  if (!(this instanceof Spy)) return new Spy(obj, method)
  var self = this,
      old_method = obj[method]
  self.count = 0
  obj[method] = function () {
    self.count++
    return old_method.apply(this, arguments)
  }
}
