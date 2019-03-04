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

  static async getMeals(user_id) {
    try {
      const meals = await Meals.findAll({ where: { user_id } });
      const response = {
        meals,
      };
      return response;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'error in get Meals' };
      throw err;
    }
  }


  static async updateMeal(user_id, id, meal) {
    try {
      const updatedMeal = await Meals.update(meal, { where: { user_id, id } });
      if (updatedMeal[0] === 0) {
        const err = { error: 'invalid meal_id' };
        throw err;
      }
      const response = {
        message: 'Meal updated successfully',
        meal,
      };
      return response;
    } catch (e) {
      const err = { error: 'invalid meal_id' };
      throw err;
    }
  }


  static async fetchMeal(id) {
    try {
      const meal = await Meals.findOne({ where: { id } });
      if (!meal) {
        const err = { error: 'Invalid meal_id' };
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
      const err = { error: 'Invalid meal Id' };
      throw err;
    }
    // return meal_id;
  }


  static async deleteMeal(id) {
    try {
      const meal = await Meals.destroy({ where: { id } });
      console.log('meal:', meal);
      if (meal === 0) {
        // create and throw 500 error
        const err = { error: 'an error occured' };
        throw err;
      }
      console.log('meal:', meal);
      const resp = {
        message: 'Meal deleted successfully',
      };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'an error occured' };
      throw err;
    }
  }
}

export default MealService;
