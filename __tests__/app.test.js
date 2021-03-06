const supertest = require('supertest')
const app = require("./../src/app")

describe(" TEST::App", () => {
    test.skip("O servidor deve responder a raiz", async () => {
        const request = await supertest(app)
        const data = await request.get('/')
        expect(data.status).toBe(200)
        
    })
    test.skip("router faill", async () => {
        const request = await supertest(app)
        const data = await request.get('/routerfaill')
        expect(data.status).toBe(404)  
    })
})