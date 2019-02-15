import request from 'supertest';
import expect from 'expect';
import meal from '../utils/meal.json';


import { app } from '../index';


describe('Meal API\'s test', () => {
  /*
  // test for fetch all meals API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  it('should return all meals', (done) => {
    request(app)
      .get('/api/v1/meals')
      .expect(200)
      .expect((res) => {
        expect(res.body)
          .toBeA('object');
        expect(res.body.data[0])
          .toBeA('object')
          .toIncludeKeys(['id', 'name', 'size', 'price']);
      })
      .end(done);
  });

  /*
  // test for Add meal API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Add meal API\'s', () => {
    it('should add new meal', (done) => {
      request(app)
        .post('/api/v1/meals')
        .send(meal)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data[0])
            .toBeA('object')
            .toIncludeKeys(['id', 'name', 'size', 'price']);
        })
        .end(done);
    });
  });


  /*
  // test for fetch a meal API
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Get a meal API', () => {
    // should get a meal by id, and return the object including the required keys
    it('should get a meal by id', (done) => {
      request(app)
        .get('/api/v1/meals/1')
        .expect(200)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.data)
            .toBeA('object')
            .toIncludeKeys(['id', 'name', 'size', 'price']);
        })
        .end(done);
    });

    // should return status:204 when user enters a meal id that doesn't exit
    it('should return a 204 for a meal id that doen\'t exist', (done) => {
      request(app)
        .get('/api/v1/meals/40')
        .expect(204)
        .end(done);
    });
  });

  /*
  // tests for delete a meal API
  */
  describe('Delete Meals API', () => {
    // test to see if we get a status: 202, when we delete a meal
    it('should delete a meal by id', (done) => {
      request(app)
        .delete('/api/v1/meals/1')
        .expect(202)
        .end(done);
    });

    // test if we get a status: 204 when the delete id doesn't exist
    it('should return a 204 if meal id doesn\'t exist', (done) => {
      request(app)
        .delete('/api/v1/meals/50')
        .expect(204)
        .end(done);
    });
  });


  /*
  // tests for update a meal API
  */
  describe('Update Meals API', () => {
    // test to see if we get a status: 202, when we delete a meal
    it('should update a meal by id', (done) => {
      request(app)
        .put('/api/v1/meals/3')
        .send(meal)
        .expect(202)
        .end(done);
    });

    // test if we get a status: 204 when the delete id doesn't exist
    it('should return a 204 if meal id doesn\'t exist', (done) => {
      request(app)
        .put('/api/v1/meals/50')
        .send(meal)
        .expect(204)
        .end(done);
    });
  });
});
