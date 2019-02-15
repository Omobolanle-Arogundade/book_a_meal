import dummyData from '../utils/dummyData';
import Menus from '../models/menu.model';

const MenuService = {

  /*
  This method is used to fetch all the Menu in my fake db..
  (i.e...coming from the dummyData object)
  */
  fetchMenu() {
    const standardMenu = dummyData.menu.map((menu) => {
      // When we retrieve the menu, we want to make sure it is of type menus
      const modelledMenu = new Menus(menu.id, menu.date, menu.mealsId);
      return modelledMenu;
    });

    return standardMenu;
  },

  /**
   * The addMent method accepts a menu object as it's parameter
   * anf then finds the index to place the menu item, then finally
   * pushes the newMent item uinto the dummyData
   * @param menu
   */
  addMenu(menu) {
    const menuLength = dummyData.menu.length;
    const lastItemId = dummyData.menu[menuLength - 1].id;
    const newId = lastItemId + 1;
    const newMenu = new Menus(newId, menu.date, menu.mealsId);
    dummyData.menu.push(newMenu);
    return dummyData.menu;
  },

};

export default MenuService;
