const mongoose = require('mongoose')
const env = require('../env/dev.env')

const mongodbUrl = `mongodb://${env.dbUser}:${env.dbSecret}@${env.dbUrl}:${env.dbPort}/${env.dbName}`

exports.connect = () => mongoose.connect(mongodbUrl)
