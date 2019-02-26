import { Router } from 'express';
// import express from 'express';
import MealController from '../controllers/meal.controller';


const router = Router();

// router.get('/', MealController.fetchAllMeals);

router.post('/', MealController.addMeal);

// router.get('/:id', MealController.fetchMeal);

// router.put('/:id', MealController.updateMeal);

// router.delete('/:id', MealController.deleteMeal);


export default router;
