import dummyData from '../utils/dummyData';
import Orders from '../models/order.model';

const OrderService = {
  /*
  This method id used to fetch all the Orders in my fake db..
  (i.e...coming from the dummyData object)
  */
  fetchAllOrders() {
    const allOrders = dummyData.orders.map((order) => {
      // When we retrieve the orders, we want to make sure it is of type Orders
      const modelledOrders = new Orders(order.id, order.date, order.customerId, order.meals);
      return modelledOrders;
    });
    return allOrders;
  },


  /**
  * This method takes in an order object as the argument,
  * then assigns an id which is an increment of the last id,
  * then push the order object to the orders array in dummydata
  * @param {*} meal
  */
  addNewOrder(order) {
    const orderLength = dummyData.orders.length;
    const lastItemId = dummyData.orders[orderLength - 1].id;
    const newId = lastItemId + 1;
    const newOrder = new Orders(newId, order.date, order.customerId, order.meals);
    dummyData.orders.push(newOrder);
    return dummyData.orders;
  },

  /**
   * This method takes an id and orderValue as its arguments
   * and then using the findIndex method, I find the index of the selected id in the array of order
   * then using the splice method, I removed the item at that index from the array
   * and and replace with the value of the newOrder to update the array
   * and then I finally return the order array
   * @param {*} id: The id of the order to update
   * @param {*} orderValue: The new value of the order ption after update
   */
  updateOrder(id, orderValue) {
    // find the index of the item to update
    const newOrder = new Orders(parseInt(id, 10), orderValue
      .date, orderValue.customerId, orderValue.meals);
    const index = dummyData
      .orders.findIndex(order => order.id === id || order.id === parseInt(id, 10));
    if (typeof index === 'number' && index >= 0) {
      dummyData.orders.splice(index, 1, newOrder);
    } else {
      return 'Order does not exist';
    }
    return dummyData.orders;
  },
};

export default OrderService;
