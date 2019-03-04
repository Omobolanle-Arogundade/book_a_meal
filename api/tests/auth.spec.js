import request from 'supertest';
import expect from 'expect';
import user from '../utils/user.json';


import { app } from '../index';


describe('Auth\'s endpoints test', () => {
  /*
  // test for Add user endpoint
  // test to see if the res body is an object
  // test to see if the response data is an object and if it includes required keys
  */
  describe('Add user endpoint', () => {
    it('should add a new user', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user.newUser)
        .expect(201)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.user)
            .toBeA('object')
            .toIncludeKeys(['firstName', 'lastName', 'email', 'phoneNo']);
        })
        .end(done);
    });

    it('should only allow unique users', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send(user.oldUser)
        .expect(400)
        .expect((res) => {
          expect(res.body)
            .toBeA('object');
          expect(res.body.message)
            .toBeA('string')
            .toEqual('User already exist');
        })
        .end(done);
    });
  });
});
