const request = require('supertest');
const app = require('./app');

describe('Posts API', () => {
    it('Get /post --> gets all posts', () => {
        return request(app)
            .get('/post')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            name : expect.any(String),
                            age : expect.any(Number)
                        })
                    ])
                )
            })
    });

    it('GET /post/:id ==> get post by id', () => {
        return request(app)
            .get('/post/1')
            .expect('Content-Type',/json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.objectContaining({
                        name : expect.any(String),
                        age : expect.any(Number)
                    })
                )
            })
    });    
});