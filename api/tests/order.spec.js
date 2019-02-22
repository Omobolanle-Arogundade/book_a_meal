import request from 'supertest';
import expect from 'expect';

import { app } from '../index';
import order from '../utils/order.json';


describe('Order API\'s test', () => {
  /*
  // test for fetch all orders API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Get Orders API', () => {
    it('should return all orders', (done) => {
      request(app)
        .get('/api/v1/orders')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'date', 'customerId', 'meals']);
        })
        .end(done);
    });
  });

  /*
  // test for Add order API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Add order API\'s', () => {
    it('should add new order', (done) => {
      request(app)
        .post('/api/v1/orders')
        .send(order)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'date', 'customerId', 'meals']);
        })
        .end(done);
    });
  });


  /*
  // tests for update a order API
  */
  describe('Update Orders API', () => {
    // test to see if we get a status: 202, when we update an order
    it('should update a order by id', (done) => {
      request(app)
        .put('/api/v1/orders/3')
        .send(order)
        .expect(202)
        .end(done);
    });

    // test if we get a status: 204 when the update id doesn't exist
    it('should return a 204 if order id doesn\'t exist', (done) => {
      request(app)
        .put('/api/v1/orders/50')
        .send(order)
        .expect(204)
        .end(done);
    });
  });
});
