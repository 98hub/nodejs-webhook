const request = require('supertest');
const { app, server } = require('../app');

describe('GET /', () => {
    it('should return This app is running properly!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('This app is running properly!');
    });
});

describe('GET /dewaweb', () => {
    it('should return Hello Dewaweb!', async () => {
        const res = await request(app).get('/dewaweb');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello Dewaweb!');
    });
});

describe('GET /test', () => {
    it('should return Test!', async () => {
        const res = await request(app).get('/test');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Test!');
    });
});

// Close the server after all tests are done
afterAll((done) => {
    server.close(done);
});