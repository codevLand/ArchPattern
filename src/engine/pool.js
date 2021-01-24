const { Pool } = require('pg')
const config = require('../config')

const pool = new Pool(config.dbURI)

module.exports = pool