import dummyData from '../utils/dummyData';
import Menus from '../models/menu.model';

const MenuService = {

  /*
  This method id used to fetch all the Menu in my fake db..
  (i.e...coming from the dummyData object)
  */
  fetchMenu() {
    const standardMenu = dummyData.menu.map((menu) => {
      // When we retrieve the menu, we want to make sure it is of type menus
      const modelledMenu = new Menus();
      modelledMenu.id = menu.id;
      modelledMenu.date = menu.date;
      modelledMenu.meals = menu.meals;
      return modelledMenu;
    });

    return standardMenu;
  },

  addMenu(menu) {
    const menuLength = dummyData.menu.length;
    const lastItemId = dummyData.menu[menuLength - 1].id;
    const newId = lastItemId + 1;
    const newMenu = new Menus();
    newMenu.id = newId;
    newMenu.date = menu.date;
    newMenu.meals = menu.meals;
    dummyData.menu.push(newMenu);
    return dummyData.menu;
  },

};

export default MenuService;
