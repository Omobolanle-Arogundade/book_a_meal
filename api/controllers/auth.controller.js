import db from '../database/models';
import hashPassword from '../helpers/hash-password';

import 'idempotent-babel-polyfill';
import comparePassword from '../helpers/compare-password';
import Token from '../helpers/token';
// import permission from '../config/permissions';


const { Users, Roles } = db;

export default class AuthController {
  /**
   * @description This method creates a user and adds the user to the databse
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns a json
   */
  static async addUser(req, res) {
    try {
    /*eslint-disable */
      // set default value for role_od
      const role_id = req.body.role_id ? req.body.role_id : 3;
      let Role = [];
      Role = await Roles.findByPk(role_id);
      console.log('Roles:', Role);
      const permissions = Role.permissions;
      const {
        firstName,
        lastName,
        email,
        phoneNo,
        password,
      } = req.body;
   /* eslint-enable */


      const findUser = await Users.findOne({ where: { email } });

      if (!findUser) {
        // hash user password
        const hashedPassword = hashPassword(password);
        const user = await Users.create({
          firstName, lastName, email, phoneNo, password: hashedPassword, role_id, permissions,
        });
        return res.status(201).json({
          status: 'success',
          message: 'User succesfully Registered',
          user,
        });
      }
      return res.status(400).json({
        status: 'Bad Request',
        message: 'User already exist',
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  }

  /**
   * @description This method finds a user and generates a token for the user allowing user to login
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns a json
   */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ where: { email } });
      if (!user) {
        throw new Error('User with provided enail doesn\'t exist');
      } else if (!comparePassword(password, user.password)) {
        throw new Error('Password doesn\'t match');
      } else {
        const safeUser = {
          id: user.id,
          firstName: user.firstName,
          email: user.email,
          phone: user.phoneNo,
          permissions: user.permissions,
        };
        const token = Token.generateToken({ user: safeUser });
        return res.status(200).json({
          status: 'success',
          message: 'User Logged In',
          token,
          user: {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phoneNo: user.phoneNo,
          },
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  }
}
