import Joi from 'joi';

class userValidator {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static async validateSignUp(req, res, next) {
    try {
      const schema = {
        user_firstName: Joi.string().required(),
        user_lastName: Joi.string().required(),
        user_email: Joi.string().email().required(),
        user_phoneNo: Joi.string().min(11).required(),
        user_password: Joi.string().min(8).required(),
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
