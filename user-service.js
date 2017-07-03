const cote = require('cote')

const responder = new cote.Responder({ name: 'user responder', key: 'user' })

// DB mocking
const users = [
  { id: 1, name: 'pierre', password: 'pierre' }
]

responder.on('index', ({ type }, cb) => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(users)
    } else {
      reject('rejected')
    }
  })
})

responder.on('show', ({ type, userId }, cb) => {
  const user = users.find(u => u.id === userId)

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user)
    } else {
      reject('rejected')
    }
  })
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
