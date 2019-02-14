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
    const newMeal = {
      id: newId,
      name: meal.name,
      size: meal.size,
      price: meal.price,
    };
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
    return meal || 'meal does not exist';
  },

  deleteAMeal(id) {
    // const removeMeal = this.getAMeal(id);
    // find index of item to delete
    const index = dummyData.meals.findIndex((meal) => {
      console.log(meal.id, parseInt(id, 10), meal.id === parseInt(id, 10));
      return meal.id === id || meal.id === parseInt(id, 10);
    });
    console.log(index, 'index');
    if (typeof index === 'number' && index >= 0) {
      dummyData.meals.splice(index, 1);
    } else {
      return 'Meal does not exist';
    }
    return dummyData.meals;
  },
};

export default MealService;
