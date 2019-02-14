import MealService from '../services/meal.service';


const MealController = {
  fetchAllMeals(res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  addMeal(res, req) {
    const newMeal = req.body;
    const addedMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'successfully added Meal',
      data: addedMeal,
    }).status(201);
  },

  fetchMeal(res, req) {
    const { id } = req.params;
    const meal = MealService.getAMeal(id);
    return res.json({
      status: 'success',
      data: meal,
    }).status(200);
  },
};

export default MealController;
