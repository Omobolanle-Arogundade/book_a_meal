import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenus);

router.post('/', MenuController.addMenu);

export default router;
