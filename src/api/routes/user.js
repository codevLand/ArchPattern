var express = require('express');
var router = express.Router();

const service = require('../../services/user')

router.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})
  
  router.get('/users', service.getUsers)
  router.get('/user/:id', service.getUserById)
  router.post('/user', service.createUser)
  router.put('/user/:id', service.updateUser)
  router.delete('/user/:id', service.deleteUser)

  module.exports = router