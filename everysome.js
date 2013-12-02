module.exports = checkUsersValid

function checkUsersValid(valid_users) {
  return function(users) {
    return users.every(function(goods) {
      return valid_users.some(function(user) {
        return goods.id === user.id
      })
    })
  }
}
