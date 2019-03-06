import OrderService from '../services/order.service';
import Parser from '../helpers/parser';

class OrderController {
  static async getAdminOrders(req, res) {
    try {
      const catererId = req.decodedToken.id;
      const getOrders = await OrderService.getAdminOrders(catererId);
      res.send(Parser.customParser(200, getOrders));
    } catch (error) {
      res.status(500).json(Parser.customParser(500, error.error));
    }
  }
}

export default OrderController;
