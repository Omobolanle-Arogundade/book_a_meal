import { isObject } from 'util';

import OrderService from '../services/order.service';

const OrderController = {
  fetchOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },

  addOrder(req, res) {
    const newOrder = req.body;
    const addedOrder = OrderService.addNewOrder(newOrder);
    res.status(201);
    return res.json({
      status: 'successfully added Order',
      data: addedOrder,
    });
  },

  updateOrder(req, res) {
    const { id } = req.params;
    const orderValue = req.body;
    const order = OrderService.updateOrder(id, orderValue);
    let response;
    if (typeof order === 'object' && isObject(order)) {
      res.status(202);
      response = res.json({
        status: 'success',
        data: order,
      });
    } else {
      res.status(204);
      response = res.send({});
    }
    return response;
  },
};

export default OrderController;
