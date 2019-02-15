import dummyData from '../utils/dummyData';
import Meals from '../models/meal.model';

const MealService = {
  /*
  This method id used to fetch all the Meals in my fake db..
  (i.e...coming from the dummyData object)
  */
  fetchAllMeals() {
    const standardMeals = dummyData.meals.map((meal) => {
      // When we retrieve the meals, we want to make sure it is of type Meals
      const modelledMeal = new Meals(meal.id, meal.name, meal.size, meal.price);
      return modelledMeal;
    });

    return standardMeals;
  },


  /**
  * This method takes in a meal object as the argument,
  * then assigns an id which is an increment of the last id,
  * then push the meal object to the meals array.
  * @param {*} meal
  */
  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastItemId = dummyData.meals[mealLength - 1].id;
    const newId = lastItemId + 1;
    const newMeal = new Meals(newId, meal.name, meal.size, meal.price);
    dummyData.meals.push(newMeal);
    return dummyData.meals;
  },

  /**
   * This method takes an id as the argument
   * and then using a find method, we find the first meal that matched that id and return it
   * If the meal is undefined, we then return an empty object
   * @param {*} id
   */
  getAMeal(id) {
    const meal = dummyData.meals.find(meals => meals.id === id || meals.id === parseInt(id, 10));
    if (meal) {
      const modelledMeal = new Meals(meal.id, meal.name, meal.size, meal.price);
      return modelledMeal;
    }
    return 'meal does not exist';
  },

  /**
   * This method takes an id as the argument
   * and then using the findIndex method, I find the index of the selected id in the array of meals
   * then using the splice method, I removed the item at that index from the array
   * and finally return the resulting Array
   * @param {*} id
   */
  deleteAMeal(id) {
    // find index of item to delete
    const index = dummyData.meals.findIndex(meal => meal.id === id || meal.id === parseInt(id, 10));
    if (typeof index === 'number' && index >= 0) {
      dummyData.meals.splice(index, 1);
    } else {
      return 'Meal does not exist';
    }
    return dummyData.meals;
  },

  /**
   * This method takes an id as the argument
   * and then using the findIndex method, I find the index of the selected id in the array of meals
   * then using the splice method, I removed the item at that index from the array
   * and and replace with the value of the newMeal to update the array
   * and then I finally return the meals array
   * @param {*} id: The id of the meal to update
   * @param {*} meal: The new value of the meal ption after update
   */
  updateMeal(id, mealValue) {
    // find the index of the item to update
    const newMeal = new Meals(id, mealValue.name, mealValue.size, mealValue.price);
    const index = dummyData.meals.findIndex(meal => meal.id === id || meal.id === parseInt(id, 10));
    if (typeof index === 'number' && index >= 0) {
      dummyData.meals.splice(index, 1, newMeal);
    } else {
      return 'Meal does not exist';
    }
    return dummyData.meals;
  },
};

export default MealService;
