import db from '../database/models';
import hashPassword from '../services/hash-password';

import 'babel-polyfill';

const { Users } = db;

export default class AuthController {
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  static async addUser(req, res) {
    try {
    /*eslint-disable */
      const role_id = req.role_id ? req.role_id : 3;
      const {
        user_firstName,
        user_lastName,
        user_email,
        user_phoneNo,
        user_password,
      } = req.body;
   /* eslint-enable */
      const password = hashPassword(user_password);
      const user = await Users.create({
        user_firstName, user_lastName, user_email, user_phoneNo, user_password: password, role_id,
      });
      return res.status(201).json({
        status: 'success',
        message: 'User succesfully Registered',
        user,
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  }
}
