import db from '../database/models';
import hashPassword from '../helpers/hash-password';
import comparePassword from '../helpers/compare-password';
import Token from '../helpers/token';


const { Users, Roles } = db;

class AuthService {
  static async createUser(user) {
    const {
      firstName, lastName, email, phoneNo, password,
    } = user;
    try {
      const role_id = user.role_id ? user.role_id : 3;
      let Role = [];
      Role = await Roles.findByPk(role_id);
      const { permissions } = Role;
      const findUser = await Users.findOne({ where: { email } });
      let response = {};
      if (!findUser) {
        // hash user password
        const hashedPassword = hashPassword(password);
        const newUser = await Users.create({
          firstName, lastName, email, phoneNo, password: hashedPassword, role_id, permissions,
        });
        response = {
          message: 'User successfully Registered',
          user: {
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phoneNo: newUser.phoneNo,
            role_id: newUser.role_id,
          },
        };
        return response;
      }
      const err = { error: 'User already exist' };
      throw err;
    } catch (e) {
      // create and throw 500 error
      const err = {
        error: e.error || 'an error occured',
      };
      throw err;
    }
  }

  static async login(user) {
    const { email, password } = user;
    try {
      let response = {};
      const findUser = await Users.findOne({ where: { email } });
      if (!findUser) {
        const err = { error: 'User with provided enail doesn\'t exist' };
        throw err;
      } else if (!comparePassword(password, findUser.password)) {
        const err = { error: 'Password doesn\'t match' };
        throw err;
      } else {
        const foundUser = {
          id: findUser.id,
          firstName: findUser.firstName,
          lastName: findUser.lastName,
          email: findUser.email,
          phoneNo: findUser.phoneNo,
          permissions: findUser.permissions,
          role_id: findUser.role_id,
        };
        const token = Token.generateToken({ user: foundUser });
        response = {
          message: 'User Logged In',
          token,
          user: foundUser,
        };
        return response;
      }
    } catch (e) {
      // create and throw 500 error
      const err = {
        error: e.error || 'an error occured',
      };
      throw err;
    }
  }
}

export default AuthService;
