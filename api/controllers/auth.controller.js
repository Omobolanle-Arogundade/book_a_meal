import 'idempotent-babel-polyfill';
import Parser from '../helpers/parser';
import AuthService from '../services/auth.service';
// import permission from '../config/permissions';
export default class AuthController {
  /**
   * @description This method creates a user and adds the user to the databse
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns a json
   */
  static async addUser(req, res) {
    const user = req.body;
    try {
      const userRes = await AuthService.createUser(user);
      res.status(201).send(Parser.customParser(201, userRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }

  /**
   * @description This method finds a user and generates a token for the user allowing user to login
   * @param {Object} req
   * @param {Object} res
   * @return {Object} returns a json
   */
  static async login(req, res) {
    const user = req.body;
    try {
      const userRes = await AuthService.login(user);
      res.status(200).send(Parser.customParser(200, userRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
    // try {
    //   const { email, password } = req.body;
    //   const user = await Users.findOne({ where: { email } });
    //   if (!user) {
    //     throw new Error('User with provided enail doesn\'t exist');
    //   } else if (!comparePassword(password, user.password)) {
    //     throw new Error('Password doesn\'t match');
    //   } else {
    //     const safeUser = {
    //       id: user.id,
    //       firstName: user.firstName,
    //       email: user.email,
    //       phone: user.phoneNo,
    //       permissions: user.permissions,
    //     };
    //     const token = Token.generateToken({ user: safeUser });
    //     return res.status(200).json({
    //       status: 'success',
    //       message: 'User Logged In',
    //       token,
    //       user: {
    //         id: user.id,
    //         name: `${user.firstName} ${user.lastName}`,
    //         email: user.email,
    //         phoneNo: user.phoneNo,
    //       },
    //     });
    //   }
    // } catch (err) {
    //   return res.status(400).json({
    //     status: 'error',
    //     message: err.message,
    //   });
    // }
  }
}
