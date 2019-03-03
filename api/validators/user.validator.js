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
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().min(11).required(),
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
