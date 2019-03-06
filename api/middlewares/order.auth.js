import Parser from '../helpers/parser';
import permissions from '../config/permissions';

class OrderAuthentication {
  static canRead(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json(Parser.customParser(401, 'No token passed'));
    }
    const permissionList = req.decodedToken.user.permissions;
    const canRead = permissionList.includes(permissions[0])
    || permissionList.includes(permissions[8]);

    if (!canRead) {
      return res.status(403).json(Parser.customParser(401, 'Sorry!! You are not authorized to perform this operation.'));
    }
    next();
    return true;
  }

  static canWrite(req, res, next) {
    if (!req.decodedToken) {
      return res.status(401).json(Parser.customParser(401, 'No token passed'));
    }
    const permissionList = req.decodedToken.user.permissions;
    const canWrite = permissionList.includes(permissions[0])
    || permissionList.includes(permissions[7]);

    if (!canWrite) {
      return res.status(403).json(Parser.customParser(401, 'Sorry!! You are not authorized to perform this operation.'));
    }
    next();
    return true;
  }
}

export default OrderAuthentication;
