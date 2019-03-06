import db from '../database/models';

const dateObj = new Date();
const date = `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1).toString().padStart(2, 0)}-${(dateObj.getDate()).toString().padStart(2, 0)}`;


const { Menus, Meals } = db;

class MenuService {
  static async createMenu(menu) {
    try {
      const storedMenu = await Menus.findOne({ where: { name: menu.name } });
      if (!storedMenu) {
        const createdMenu = await Menus.create(menu);
        const response = {
          message: 'Menu created successfully',
          meal: {
            id: createdMenu.id,
            name: createdMenu.name,
            description: createdMenu.description,
            image_url: createdMenu.image_url,
            meals: createdMenu.meals,
          },
        };
        return response;
      }
      const err = { error: 'Menu already exist' };
      throw err;
    } catch (e) {
      const err = {
        error: e.error,
      };
      throw err;
    }
  }

  static async getAllMenus() {
    try {
      const menus = await Menus.findAll({ where: { date } });
      const userMeals = await Meals.findAll();
      const modified = menus.map((menu) => {
        const mealss = menu.meals;
        menu.meals = mealss.map(id => userMeals.filter(meal => meal.id === id));
        return menu;
      });
      const response = {
        menus: modified,
      };
      return response;
    } catch (e) {
      // create and throw 500 error
      const err = { error: e.error || 'error in get Menu' };
      throw err;
    }
  }

  static async getMenus(userId) {
    try {
      const menus = await Menus.findAll({ where: { userId, date } });
      const userMeals = await Meals.findAll({ where: { userId } });
      const modified = menus.map((menu) => {
        const mealss = menu.meals;
        menu.meals = mealss.map(id => userMeals.filter(meal => meal.id === id));
        return menu;
      });
      const response = {
        menus: modified,
      };
      return response;
    } catch (e) {
      // create and throw 500 error
      const err = { error: e.error || 'error in get Menu' };
      throw err;
    }
  }


  static async updateMenu(userId, id, menu) {
    try {
      const updatedMenu = await Menus.update(menu, { where: { userId, id } });
      if (updatedMenu[0] === 0) {
        const err = { error: 'invalid menuId' };
        throw err;
      }
      const response = {
        message: 'Menu updated successfully',
        menu,
      };
      return response;
    } catch (e) {
      const err = { error: e.error || 'Invalid menu Id' };
      throw err;
    }
  }

  static async deleteMenu(id) {
    try {
      const menu = await Menus.destroy({ where: { id } });
      if (menu === 0) {
        const err = { error: 'Invalid menu Id' };
        throw err;
      }
      const resp = {
        message: 'Menu deleted successfully',
      };
      return resp;
    } catch (e) {
      const err = { error: e.error || 'Invalid menu Id' };
      throw err;
    }
  }
}
export default MenuService;
