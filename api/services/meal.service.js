import dummyData from '../utils/dummyData';
import Meals from '../models/meal.model';

const MealService = {

  //   This method id used to fetch all the Meals in my fake db..
  //    (i.e...coming from the dummyData object)
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

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastItemId = dummyData.meals[mealLength - 1].id;
    const newId = lastItemId + 1;
    meal.id = newId; // eslint-disable-line no-param-reassign
    dummyData.meals.push(meal);
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(meals => meals.id === id);
    return meal || {};
  },

};


module.exports = {
  MealService,
};
