const User = require('../src/user')

exports.init = () => {
  const adminUser = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'jd@gmail.com',
    password: 'password',
    access: 'administrator',
    crmStatus: 'active'
  })

  adminUser.save(err => {
    if (err) {
      throw err
    }
  })
}
