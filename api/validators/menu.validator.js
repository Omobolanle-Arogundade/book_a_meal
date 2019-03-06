import Joi from 'joi';

class MenuValidator {
  static async validateMenu(req, res, next) {
    try {
      const schema = {
        name: Joi.string().min(5).max(40).required(),
        description: Joi.string().min(10).max(100).optional(),
        image_url: Joi.string().optional(),
        date: Joi.string().required(),
        meals: Joi.array().required(),
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

  static async validateUpdate(req, res, next) {
    try {
      const schema = {
        id: Joi.number().integer().required(),
        name: Joi.string().min(5).max(40).required(),
        description: Joi.string().min(10).max(100).optional(),
        image_url: Joi.string().optional(),
        date: Joi.string().required(),
        meals: Joi.array().required(),
      };
      await Joi.validate({ id: req.params.id, ...req.body }, schema);
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

  static async validateDelete(req, res, next) {
    try {
      const schema = {
        id: Joi.number().integer().required(),
      };
      await Joi.validate(req.params, schema);
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

export default MenuValidator;
