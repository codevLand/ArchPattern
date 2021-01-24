const { Pool } = require('pg')
const { Logger } = require('winston')

/**
 * Attach user to req.currentUser
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const attachCurrentUser = (req, res, next) => {
  // attach user to req passed from model accessed via pg pool
  const currentUser = {
    'id': 1,
    'name': 'O. Oda',
    'email': 'ode.to.lan@gmail.com',
  }
  
  req.currentUser = currentUser;
  return next();

}

module.exports = attachCurrentUser;

// const attachCurrentUser = async (req, res, next) => {
//   const Logger : Logger = Container.get('logger');
//   try {
//     const UserModel = Container.get('userModel') as mongoose.Model<IUser & mongoose.Document>;
//     const userRecord = await UserModel.findById(req.token._id);
//     if (!userRecord) {
//       return res.sendStatus(401);
//     }
//     const currentUser = userRecord.toObject();
//     Reflect.deleteProperty(currentUser, 'password');
//     Reflect.deleteProperty(currentUser, 'salt');
//     req.currentUser = currentUser;
//     return next();
//   } catch (e) {
//     Logger.error('🔥 Error attaching user to req: %o', e);
//     return next(e);
//   }
// };