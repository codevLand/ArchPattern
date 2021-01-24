const pool = require('../engine/pool')

/**
 * @todo add function calls to models and data Interface
 */
class Users extends Models{
  getUsers() {
    // models->getAll(users) 
  }

  getUserById(user.id) {
    // models->getById(users) 
  }
  
  //create user using Interface call
  createUser(IUserInputDTO) {
    // generate UUID
    // models->create(users)
  }

  // update user using Interface call
  updateUser(IUserInputDTO) {
    // models->getById(users) 
    // models->update(users)
  }

  deleteUser(user.id) {
    // models->update(users)
  }
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}