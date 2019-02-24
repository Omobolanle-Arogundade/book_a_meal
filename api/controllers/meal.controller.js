import db from '../models';
const Meal = db.Meal;

export default class mealsController {
  static addMeal(req, res) {
    return Meal
      .create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image_url: req.body.image_url,
        size: req.body.size,
      })
      .then((meal) => {
        res.status(201);
        res.json({
          message: 'Added meal successfully',
          meal,
        });
      })
      .catch(error => res.status(400).send(error));
  }
}
