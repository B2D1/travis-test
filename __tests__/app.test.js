const app = require('../lib/app');
const supertest = require('supertest');
const server = app.listen();
const request = supertest(server);

test('GET /user', async (done) => {
  const res = await request.get('/user');
  expect(res.status).toBe(200);
  expect(res.text).toBe('hello, friend');
  done();
});

afterAll((done) => {
  server.close();
  done();
});
