import MealService from '../services/meal.service';
import Parser from '../helpers/parser';


class MealController {
  static async createMeal(req, res) {
    const meal = req.body;
    meal.userId = req.decodedToken.user.id;
    try {
      const mealRes = await MealService.createMeal(meal);
      res.status(201).send(Parser.customParser(201, mealRes));
    } catch (error) {
      res.status(500).json(Parser.errorParser(500, error.error));
    }
  }

  static async getMeals(req, res) {
    try {
      const userId = req.decodedToken.user.id;
      const mealRes = await MealService.getMeals(userId);
      res.send(Parser.customParser(200, mealRes));
    } catch (error) {
      res.status(500).json(Parser.errorParser(500, error.error));
    }
  }

  static async updateMeal(req, res) {
    const meal = req.body;
    const userId = req.decodedToken.user.id;
    try {
      const updateMealRes = await MealService.updateMeal(userId, req.params.id, meal);
      res.status(202).send(Parser.customParser(202, updateMealRes));
    } catch (error) {
      res.status(500).json(Parser.customParser(500, error.error));
    }
  }

  static async fetchMeal(req, res) {
    try {
      const mealId = req.params.id;
      const mealRes = await MealService.fetchMeal(mealId);
      res.send(Parser.customParser(200, mealRes));
    } catch (error) {
      res.status(500).json(Parser.customParser(500, error.error));
    }
  }

  static async deleteMeal(req, res) {
    try {
      const deleteMealRes = await MealService.deleteMeal(req.params.id);
      res.status(202).send(Parser.customParser(202, deleteMealRes));
    } catch (error) {
      res.status(500).json(Parser.customParser(500, error.error));
    }
  }
}

export default MealController;
