const request = require('supertest');

const { app } = require('../index');

describe('API test', () => {
  it('should return Hello World!!', (done) => {
    request(app)
      .get('/')
      .expect('Hello World!!')
      .end(done);
  });
});
