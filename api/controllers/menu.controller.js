// import { isObject } from 'util';

import MenuService from '../services/menu.service';

const MenuController = {
  /**
 * fetchAllMenus methods gets all the Menu for a day from
 * the MenuService's fetchMenu methods and returns
 * a json response with status and data
 * @param req
 * @param res
 */
  fetchAllMenus(req, res) {
    const allMenus = MenuService.fetchMenu();
    return res.json({
      status: 'success',
      data: allMenus,
    }).status(200);
  },

  /**
   * addMenu methods gets the newMwnu passed in the request body
   * and uses the MenuService's addMenu method to add menu to the menus array
   * and returns a json response with status and data
   * @param req
   * @param res
   */
  addMenu(req, res) {
    const newMenu = req.body;
    const addedMenu = MenuService.addMenu(newMenu);
    res.status(201);
    return res.json({
      status: 'successfully added Menu',
      data: addedMenu,
    });
  },
};

export default MenuController;
