import Joi from 'joi';

class userValidator {
  /**
   * validate SignUp middleware
   * this checks if all the required fields are entered and if value entered is valid
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async validateSignUp(req, res, next) {
    try {
      const schema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNo: Joi.string().min(11).required(),
        password: Joi.string().min(8).required(),
      };
      await Joi.validate(req.body, schema);
      next();
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: String(err.details[0].message),
        type: 'validation',
      });
    }
    return true;
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async validateLogin(req, res, next) {
    try {
      const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
      };
      await Joi.validate(req.body, schema);
      next();
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: String(err.details[0].message),
        type: 'validation',
      });
    }
    return true;
  }
}

export default userValidator;
