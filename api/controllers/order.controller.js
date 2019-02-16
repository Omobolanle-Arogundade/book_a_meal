import { isObject } from 'util';

import OrderService from '../services/order.service';

const OrderController = {

  /**
 * fetchAllOrders methods gets all the Order from
 * the OrderService's fetchOrders methods and returns
 * a json response with status and data
 * @param req
 * @param res
 */
  fetchOrders(req, res) {
    const allOrders = OrderService.fetchAllOrders();
    return res.json({
      status: 'success',
      data: allOrders,
    }).status(200);
  },

  /**
   * addOrder methods gets the newOrder passed in the request body
   * and uses the OrderService's addOrder method to add order to the orders array
   * and returns a json response with status and data
   * @param req
   * @param res
   */
  addOrder(req, res) {
    const newOrder = req.body;
    const addedOrder = OrderService.addNewOrder(newOrder);
    res.status(201);
    return res.json({
      status: 'successfully added Order',
      data: addedOrder,
    });
  },

  /**
 * The updateOrder method gets the id passed in the request params
 * and the new value of the order passes in the post bosy
 * and then uses the OrderService's updateOrder method to find and
 * update the order with the provided index and data
 * @param {*} req
 * @param {*} res
 */
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
