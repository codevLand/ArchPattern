const { Router } = require('express')
// const auth = require( './routes/auth')
const user = require( './routes/user')

const app = Router();

// guaranteed to get dependencies
module.exports = (app) => {
	// auth,
	user
}