import db from '../database/models';


const { Meals } = db;
/**
 *
 */
class MealService {
  /**
   *
   * @param {*} meal
   */
  static async createMeal(meal) {
    try {
      const createdMeal = await Meals.create(meal);
      const response = {
        message: 'Meal created successfully',
        meal: {
          id: createdMeal.id,
          name: createdMeal.name,
          description: createdMeal.description,
          price: createdMeal.price,
          image_url: createdMeal.image_url,
        },
      };
      return response;
    } catch (e) {
      // create and throw 500 error
      const err = {
        error: 'error in create meal',
      };
      throw err;
    }
  }

  static async getMeals(userId) {
    try {
      const meals = await Meals.findAll({ where: { userId } });
      const response = {
        meals,
      };
      return response;
    } catch (e) {
      // create and throw 500 error
      const err = { error: e.error || 'error in get Meals' };
      throw err;
    }
  }


  static async updateMeal(userId, id, meal) {
    try {
      const updatedMeal = await Meals.update(meal, { where: { userId, id } });
      if (updatedMeal[0] === 0) {
        const err = { error: 'invalid mealId' };
        throw err;
      }
      const response = {
        message: 'Meal updated successfully',
        meal,
      };
      return response;
    } catch (e) {
      const err = { error: e.error || 'Invalid meal Id' };
      throw err;
    }
  }


  static async fetchMeal(id) {
    try {
      const meal = await Meals.findOne({ where: { id } });
      if (!meal) {
        const err = { error: 'Invalid mealId' };
        throw err;
      }
      const response = {
        meal: {
          id: meal.id,
          name: meal.name,
          description: meal.description,
          price: meal.price,
          image_url: meal.image_url,
        },
      };
      return response;
    } catch (e) {
      const err = { error: e.error || 'Invalid meal Id' };
      throw err;
    }
    // return mealId;
  }


  static async deleteMeal(id) {
    try {
      const meal = await Meals.destroy({ where: { id } });
      if (meal === 0) {
        // create and throw 500 error
        const err = { error: 'an error occured' };
        throw err;
      }
      const resp = {
        message: 'Meal deleted successfully',
      };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: e.error || 'Invalid meal Id' };
      throw err;
    }
  }
}

export default MealService;
