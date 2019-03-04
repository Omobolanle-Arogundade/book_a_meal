import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

/**
 *
 *
 * @class createToken
 */
class Token {
  /**
   * @description This method generates a token for a user
   * @param {Object} user
   * @return {String} returns token
   */
  static generateToken(user) {
    const authToken = jwt.sign(
      user, secretKey,
      { expiresIn: '24h' },
    );

    return authToken;
  }
}

export default Token;
