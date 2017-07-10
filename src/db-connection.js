const mongoose = require('mongoose')
const env = require('../env/development')
const dbInit = require('./db-init')

mongoose.Promise = global.Promise

const mongodbURI = `mongodb://${env.dbUser}:${env.dbSecret}@${env.dbURL}:${env.dbPort}/${env.dbName}`

mongoose.connect(mongodbURI).then(() => {
  dbInit.init()
}).catch(err => {
  console.log('Error', err)
})
