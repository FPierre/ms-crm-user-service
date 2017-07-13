const cote = require('cote')
const { connect } = require('../db/connection')
const User = require('./user')

connect()

const responder = new cote.Responder({ name: 'user responder', key: 'user' })

responder.on('index', () => {
  return User.find({})
})

responder.on('show', ({ id }) => {
  return User.findById(id)
})

responder.on('login', ({ user }) => {
  cb(users.find(u => u.name === user.name && user.password === user.password))
})

/*
subscriber.on('update user', update => {
  users.push(update.user)
  console.log(`received user ${update.user}`)
})
*/
