import { Router } from 'express';
import MenuController from '../controllers/menu.controller';
import Auth from '../middlewares/auth';
import MenuAuthentication from '../middlewares/menu.auth';
import MenuValidator from '../validators/menu.validator';

// Add menu validator
const router = Router();

router.get('/', Auth.verifyToken, MenuAuthentication.canRead, MenuController.getAllMenus);
router.get('/admin', Auth.verifyToken, MenuAuthentication.canWrite, MenuController.getMenus);
router.post('/', Auth.verifyToken, MenuAuthentication.canWrite, MenuValidator.validateMenu, MenuController.createMenu);
router.put('/:id', Auth.verifyToken, MenuAuthentication.canWrite, MenuValidator.validateUpdate, MenuController.updateMenu);
router.delete('/:id', Auth.verifyToken, MenuAuthentication.canWrite, MenuValidator.validateDelete, MenuController.deleteMenu);


export default router;
