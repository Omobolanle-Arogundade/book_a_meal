import db from '../models';

const { Meal } = db;

export default class mealsController {
  static addMeal(req, res) {
    const {
      name, description, price, size, catererId, image,
    } = req.body;
    // const { image } = req.files;
    const imageUrl = `/api/images/${image}`;
    Meal
      .create({
        name,
        description,
        price,
        size,
        catererId,
        imageUrl,
      })
      .then((meal) => {
        res.status(201);
        res.json({
          message: 'Added meal option successfully',
          meal,
        });
      })
      .catch(error => res.status(400).send(error));
  }
}
