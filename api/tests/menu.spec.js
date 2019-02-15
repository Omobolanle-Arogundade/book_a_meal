import request from 'supertest';
import expect from 'expect';

import { app } from '../index';
import menu from '../utils/menu.json';


describe('Menu API\'s test', () => {
  /*
  // test for fetch all meals API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Get Menu API', () => {
    it('should return all menu', (done) => {
      request(app)
        .get('/api/v1/menu')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'date', 'mealsId']);
        })
        .end(done);
    });
  });


  /*
  // test for Add menu API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Add Menu API Test', () => {
    it('should add menus for the day', (done) => {
      request(app)
        .post('/api/v1/menu')
        .send(menu)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'date', 'mealsId']);
        })
        .end(done);
    });
  });
});
