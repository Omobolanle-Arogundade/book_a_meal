import Meal from '../models/meal';

export default class mealsController {
  static addMeal(req, res) {
    const {
      name, description, price, size, catererId,
    } = req.body;
    const { image } = req.files;
    const imageUrl = `/api/images/${image.name}`;
    // image.mv(`${imageUrl}`, (err) => {
    //   if (err) {
    //     return res.status(500).send(err);
    //   }

    //   return res.send('File uploaded!');
    // });
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
