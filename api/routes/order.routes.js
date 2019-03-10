import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import Auth from '../middlewares/auth';
import OrderAuthentication from '../middlewares/order.auth';


const router = Router();

router.get('/', Auth.verifyToken, OrderAuthentication.canRead, OrderController.getAdminOrders);
router.post('/', Auth.verifyToken, OrderAuthentication.canWrite, OrderController.createOrder);
router.put('/:id', Auth.verifyToken, OrderAuthentication.canWrite, OrderController.modifyOrder);


export default router;
