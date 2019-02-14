import { Router } from 'express';
// import express from 'express';
import MealController from '../controllers/meal.controller';


const router = Router();

router.get('/', MealController.fetchAllMeals);

router.post('/', MealController.addMeal);

router.get('/:id', MealController.fetchMeal);


export default router;
