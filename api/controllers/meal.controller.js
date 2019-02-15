import { isObject } from 'util';

import MealService from '../services/meal.service';


const MealController = {


  /**
 * fetchAllMeals methods gets all the Meal options from
 * the MealService's fetchAllMeals methods and returns
 * a json response with status and data
 * @param req
 * @param res
 */
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },

  /**
   * addMeal methods gets the newMeal passed in the request body
   * and uses the MealService's addMeal method to add meal to the meals array
   * and returns a json response with status and data
   * @param req
   * @param res
   */
  addMeal(req, res) {
    const newMeal = req.body;
    const addedMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'successfully added Meal',
      data: addedMeal,
    }).status(201);
  },

  /**
 * the fetchMeal method gets the id passed in the request params
 * and then uses the MealServices's getAMeal method to find the
 * meal with the provided index
 * @param {*} req
 * @param {*} res
 */
  fetchMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.getAMeal(id);
    let response;
    if (typeof meal === 'object' && isObject(meal)) {
      response = res.json({
        status: 'success',
        data: meal,
      }).status(200);
    } else {
      response = res.json({
        status: 'Not Found',
      }).status(404);
    }
    return response;
  },

  /**
 * The deleteMeal method gets the id passed in the request params
 * and then uses the MealService's deleteMeal method to find and
 * delete the meal with the provided index
 * @param {*} req
 * @param {*} res
 */
  deleteMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.deleteAMeal(id);
    let response;
    if (typeof meal === 'object' && isObject(meal)) {
      response = res.json({
        status: 'success',
        data: meal,
      }).status(200);
    } else {
      response = res.json({
        status: 'Not Found',
      }).status(404);
    }
    return response;
  },

  /**
 * The updateMeal method gets the id passed in the request params
 * and the new value of the meal passes in the post bosy
 * and then uses the MealService's updateMeal method to find and
 * update the meal with the provided index and data
 * @param {*} req
 * @param {*} res
 */
  updateMeal(req, res) {
    const { id } = req.params;
    const mealValue = req.body;
    const meal = MealService.updateMeal(id, mealValue);
    let response;
    if (typeof meal === 'object' && isObject(meal)) {
      response = res.json({
        status: 'success',
        data: meal,
      }).status(200);
    } else {
      response = res.json({
        status: 'Not Found',
      }).status(404);
    }
    return response;
  },
};

export default MealController;
