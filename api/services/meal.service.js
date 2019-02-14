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
      const modelledMeal = new Meals();
      modelledMeal.id = meal.id;
      modelledMeal.name = meal.name;
      modelledMeal.size = meal.size;
      modelledMeal.price = meal.price;
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
    meal.id = newId; // eslint-disable-line no-param-reassign
    dummyData.meals.push(meal);
  },

  /**
   * This method takes an id as the argument
   * and then using a find method, we find the first meal that matched that id and return it
   * If the meal is undefined, we then return an empty object
   * @param {*} id
   */
  getAMeal(id) {
    const meal = dummyData.meals.find(meals => meals.id === id);
    return meal || {};
  },

};


export default MealService;
