const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello World!');
    });
});

describe('GET /dewaweb', () => {
    it('should return Hello Dewaweb!', async () => {
        const res = await request(app).get('/dewaweb');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello Dewaweb!');
    });
});

// Close the server after all tests are done
afterAll((done) => {
    server.close(done);
});