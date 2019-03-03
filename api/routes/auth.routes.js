import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import userValidator from '../validators/user.validator';


const router = Router();


router.post('/signup', userValidator.validateSignUp, AuthController.addUser);

// router.get('/:id', MealController.fetchMeal);

// router.put('/:id', MealController.updateMeal);

// router.delete('/:id', MealController.deleteMeal);


export default router;
