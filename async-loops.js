module.exports = loadUsers

function loadUsers(userIds, load, done) {
  var users = [],
      countdown = userIds.length
  for (var i = 0; i < countdown; ++i) {
    (function (idx) {
      load(userIds[i], function(user) {
        users[idx] = user
        !--countdown && done(users)
      })
    })(i)
  }
}

