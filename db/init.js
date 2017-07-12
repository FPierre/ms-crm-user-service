const User = require('../src/user')

exports.init = () => {
  const userOne = new User({
    firstName: 'John',
    lastName: 'Doe',
    password: 'password'
  })

  userOne.save(err => {
    if (err) {
      throw err
    }
  })
}
