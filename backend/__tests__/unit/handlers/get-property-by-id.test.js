// Import all functions from get-all-items.js 
import { getPropertyByID } from '../../../src/handlers/get-property-by-id.ts';

// This includes all tests for getAllItemsHandler() 
describe('Test getSingleProperty', () => {

    it('should return a single property', async () => {
        const event = {
            httpMethod: 'GET',
            userToken: 'TEST',
            id: '291e3b22-2dd9-4d5b-a5b8-94dee4f34402'
        }

        // Invoke helloFromLambdaHandler() 
        const result = await lambda.getPropertyByID(event);

        console.log(result);
    });
}); 
