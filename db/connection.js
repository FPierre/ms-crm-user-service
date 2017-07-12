const mongoose = require('mongoose')
const env = require('../env/dev.env')
const { init } = require('./init')

mongoose.Promise = global.Promise

const mongodbURI = `mongodb://${env.dbUser}:${env.dbSecret}@${env.dbURL}:${env.dbPort}/${env.dbName}`

mongoose.connect(mongodbURI).then(() => init()).catch(err => console.log(err))
