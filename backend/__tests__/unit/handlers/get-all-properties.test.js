// Import all functions from get-all-items.js 
const lambda = require('../../../src/handlers/get-all-properties.js'); 
 
// This includes all tests for getAllItemsHandler() 
describe('Test getAllProperties', () => { 
    
    it('should return ids', async () => { 
        const event = { 
            httpMethod: 'GET' ,
            userToken: 'TEST'
        } 
 
        // Invoke helloFromLambdaHandler() 
        const result = await lambda.getAllProperties(event); 
 
        console.log(result);
    }); 
}); 
