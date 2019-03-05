import jwt from 'jsonwebtoken';
import Parser from '../helpers/parser';

class Auth {
  static verifyToken(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.Authorization || req.headers.authorization;
    token = token ? token.substring(7) : token;
    if (!token) {
      return res.status(403).json(Parser.customParser(403, 'No token provided'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json(Parser.customParser(401, error.message));
      }
      req.decodedToken = decoded;
      next();
      return next;
    });
    return true;
  }
}
export default Auth;
