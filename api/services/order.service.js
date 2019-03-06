import db from '../database/models';

const { Orders } = db;


class OrderService {
  static async getAdminOrders(catererId) {
    try {
      const orders = await Orders.findAll({ where: { catererId } });
      const resp = {
        message: 'Successfully fetched orders',
        orders,
      };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
  }
}

export default OrderService;
