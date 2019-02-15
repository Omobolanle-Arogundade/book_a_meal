// import { isObject } from 'util';

import MenuService from '../services/menu.service';

const MenuController = {
  fetchAllMenus(req, res) {
    const allMenus = MenuService.fetchMenu();
    return res.json({
      status: 'success',
      data: allMenus,
    }).status(200);
  },

  addMenu(req, res) {
    const newMenu = req.body;
    const addedMenu = MenuService.addMenu(newMenu);
    return res.json({
      status: 'successfully added Menu',
      data: addedMenu,
    }).status(201);
  },
};

export default MenuController;
