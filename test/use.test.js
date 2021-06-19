//j

jest.mock('../src/service');

const service = require('../src/service');

const request = require('supertest');

const app = require('../src/app');

test('Deve lista todos os usuários', () => {

    service.mylogs();
    return request(app).get('/users')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('name', 'John Doe');
        
    })
})