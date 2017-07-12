const cote = require('cote')
const User = require('./user')

const responder = new cote.Responder({ name: 'user responder', key: 'user' })

responder.on('index', ({ type }, cb) => {
  return User.find({}).exec()
})

responder.on('show', ({ type, id }, cb) => {
  return User.findById(id).exec()
})

responder.on('login', ({ type, user }, cb) => {
  cb(users.find(u => u.name === user.name && user.password === user.password))
})

/*
subscriber.on('update user', update => {
  users.push(update.user)
  console.log(`received user ${update.user}`)
})
*/
