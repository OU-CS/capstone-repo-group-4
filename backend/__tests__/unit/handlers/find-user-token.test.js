// Import all functions from get-all-items.js 
const lambda = require('../../../src/handlers/find-user-token.js'); 
 
// This includes all tests for getAllItemsHandler() 
describe('Test findUserToken', () => { 
    
    it('should return ids', async () => { 
        const event = { 
            httpMethod: 'GET' ,
            userToken: 'TEST'
        } 
 
        // Invoke helloFromLambdaHandler() 
        const result = await lambda.findUserToken(event); 
 
        const expectedResult = { 
            statusCode: 200, 
            body: "token found"
        }; 
 
        // Compare the result with the expected result 
        expect(result).toEqual(expectedResult); 
    }); 
}); 
