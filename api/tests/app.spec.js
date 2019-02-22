import request from 'supertest';
import expect from 'expect';
import { app } from '../index';

describe('API test', () => {
  it('should return Hello World!!', (done) => {
    request(app)
      .get('/')
      .expect((res) => {
        expect(res.body).toBeA('object');
        expect(res.body).toEqual({ message: 'Welcome to Book a Meal API' });
      })
      .end(done);
  });
});
