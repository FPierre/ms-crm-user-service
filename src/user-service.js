const cote = require('cote')
const { connect } = require('../db/connection')
const { init } = require('../db/init')
const User = require('./user')

connect()
  // .then(() => init())
  // .catch(err => console.log(err))

const responder = new cote.Responder({ name: 'user responder', key: 'user' })

responder.on('index', ({ page, limit }) => {
  return User.paginate({}, { page, limit })
})

responder.on('show', ({ id }) => {
  return User.findById(id)
})

responder.on('create', ({ user }) => {
  return new User(user).save()
})

responder.on('login', ({ email }) => {
  return User.findOne({ 'email': email }, 'email password')
})

/*
subscriber.on('update user', update => {
  users.push(update.user)
  console.log(`received user ${update.user}`)
})
*/
