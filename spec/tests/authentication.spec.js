//Arrange
const axios = require('axios')
const expect = require('chai').expect
const ENV = require('../../environment')
const ROUTES = require('../support/routes')


describe('Testcases for /authentication route', () => {

    it(`Request to ${ROUTES.authentication.createRequestToken} 
    generates new token and responds 200`, async () => {
        //Act
        const request = await axios({
            method: 'get',
            url: `${ENV.BASE_URL}${ROUTES.authentication.createRequestToken}`,
            params: { api_key: `${ENV.API_KEY}` }
        })
        //Assert
        expect(request.status).eq(200)
        expect(JSON.stringify(request.data)).contain('success')
        expect(JSON.stringify(request.data)).contain('expires_at')
        expect(JSON.stringify(request.data)).contain('request_token')
    })

})