import MenuService from '../services/menu.service';
import Parser from '../helpers/parser';

class MenuController {
  static async createMenu(req, res) {
    const menu = req.body;
    menu.userId = req.decodedToken.user.id;
    try {
      const menuRes = await MenuService.createMenu(menu);
      res.status(201).send(Parser.customParser(201, menuRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }

  static async getAllMenus(req, res) {
    try {
      const userId = req.decodedToken.user.id;
      const menuRes = await MenuService.getAllMenus(userId);
      res.send(Parser.customParser(200, menuRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }

  static async getMenus(req, res) {
    try {
      const userId = req.decodedToken.user.id;
      const menuRes = await MenuService.getMenus(userId);
      res.send(Parser.customParser(200, menuRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }

  static async updateMenu(req, res) {
    const menu = req.body;
    const userId = req.decodedToken.user.id;
    try {
      const updateMenuRes = await MenuService.updateMenu(userId, req.params.id, menu);
      res.status(202).send(Parser.customParser(202, updateMenuRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }

  static async deleteMenu(req, res) {
    try {
      const deleteMenuRes = await MenuService.deleteMenu(req.params.id);
      res.status(202).send(Parser.customParser(202, deleteMenuRes));
    } catch (error) {
      res.status(400).json(Parser.customParser(400, error.error));
    }
  }
}

export default MenuController;
