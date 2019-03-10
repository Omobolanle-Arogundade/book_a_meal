import OrderService from '../services/order.service';
import Parser from '../helpers/parser';

class OrderController {
  static async getAdminOrders(req, res) {
    try {
      const catererId = req.decodedToken.user.id;
      const getOrders = await OrderService.getAdminOrders(catererId);
      res.send(Parser.customParser(200, getOrders));
    } catch (error) {
      res.status(500).json(Parser.customParser(500, error.error));
    }
  }


  static async createOrder(req, res) {
    const order = req.body;
    order.userId = req.decodedToken.user.id;
    try {
      const OrderRes = await OrderService.createOrder(order);
      res.send(Parser.customParser(200, OrderRes));
    } catch (error) {
      res.status(401).json(Parser.customParser(401, error.error));
    }
  }

  static async modifyOrder(req, res) {
    const order = req.body;
    const userId = req.decodedToken.user.id;
    try {
      const OrderRes = await OrderService.modifyOrder(userId, req.params.id, order);
      res.send(Parser.customParser(200, OrderRes));
    } catch (error) {
      res.status(401).json(Parser.customParser(401, error.error));
    }
  }
}

export default OrderController;
