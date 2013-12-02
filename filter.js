module.exports = getShortMessages

function getShortMessages(objs) {
  return objs.map(function(obj) {
    return obj.message
  }).filter(function(message) {
    return message.length < 50
  })
}
