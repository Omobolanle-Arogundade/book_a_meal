import db from '../database/models';

const { Orders, Meals, Users } = db;
const date = new Date();


class OrderService {
  static async getAdminOrders(catererId) {
    try {
      const orders = await Orders.findAll({ where: { catererId } });
      const users = await Users.findAll();
      if (orders) {
        orders.map((order) => {
          const orderItem = order;
          orderItem.userId = users.filter(user => user.id === orderItem.userId);
          [orderItem.userId] = orderItem.userId;
          return orderItem;
        });

        // orders = Object.keys(orders)
        //   .filter(key => allowed.includes(key))
        //   .reduce((obj, key) => {
        //     obj[key] = orders[key];
        //     return obj;
        //   }, {});
      }
      const resp = {
        message: 'Successfully fetched orders',
        orders,
      };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'an error occured' };
      throw err;
    }
  }


  static async createOrder(order) {
    const newOrder = order;
    try {
      const meal = await Meals.findOne({ where: { id: order.mealId } });
      newOrder.catererId = meal.userId;
      newOrder.time = date;
      newOrder.status = 0;
      const orderedMeal = await Orders.create(newOrder);
      const response = {
        message: 'Order created successfully',
        id: orderedMeal,
      };
      return response;
    } catch (e) {
      const err = { error: 'an error occured' };
      throw err;
    }
  }

  static async modifyOrder(userId, id, order) {
    try {
      const updatedOrder = await Orders.update(order, { where: { userId, id } });
      if (updatedOrder[0] === 0) {
        const err = { error: 'invalid orderId' };
        throw err;
      }
      const response = {
        message: 'Order updated successfully',
        order,
      };
      return response;
    } catch (e) {
      const err = { error: e.error || 'Invalid order Id' };
      throw err;
    }
  }
}

export default OrderService;
