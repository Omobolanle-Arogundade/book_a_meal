import request from 'supertest';

import { app } from '../index';

describe('API test', () => {
  it('should return Hello World!!', (done) => {
    request(app)
      .get('/')
      .expect('Hello World!!')
      .end(done);
  });
});
