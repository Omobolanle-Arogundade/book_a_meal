import { Router } from 'express';
// import express from 'express';
import MealController from '../controllers/meal.controller';
import Auth from '../middlewares/auth';
import mealAuthentication from '../middlewares/meal.auth';
import mealValidator from '../validators/meal.validator';


const router = Router();

router.get('/', Auth.verifyToken, mealAuthentication.canRead, MealController.getMeals);

router.post('/', Auth.verifyToken, mealAuthentication.canWrite, mealValidator.validateMeal, MealController.createMeal);

router.get('/:id', Auth.verifyToken, mealAuthentication.canRead, MealController.fetchMeal);

router.put('/:id', Auth.verifyToken, mealAuthentication.canWrite, mealValidator.validateUpdate, MealController.updateMeal);

router.delete('/:id', Auth.verifyToken, mealAuthentication.canWrite, mealValidator.validateDelete, MealController.deleteMeal);


export default router;
