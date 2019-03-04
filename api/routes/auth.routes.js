import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import userValidator from '../validators/user.validator';


const router = Router();


router.post('/signup', userValidator.validateSignUp, AuthController.addUser);

router.post('/login', userValidator.validateLogin, AuthController.login);


export default router;
