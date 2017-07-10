const User = require('./user')

exports.init = () => {
  const user1 = new User({
    first_name: 'John',
    last_name: 'Doe',
    password: 'password'
  })

  user1.save(err => {
    if (err) {
      throw err
    }
  })
}
