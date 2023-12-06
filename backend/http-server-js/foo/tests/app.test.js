var app = require('../app')
var request = require('supertest')

describe('GET /', () => {
  test('GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  })
})

describe('GET /users', () => {
  test('GET /', async () => {
    const res = await request(app).get('/users');
   
    expect(res.statusCode).toBe(200);
  })
})
