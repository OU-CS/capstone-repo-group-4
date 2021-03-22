// Import all functions from get-all-items.js
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getPropertyByID } from '../../../src/handlers/get-property-by-id';

// This includes all tests for getAllItemsHandler()
describe('Test getPropertyByID', () => {
    it('should return ids', async () => {
        const event: APIGatewayProxyEvent = {
            body: null,
            headers: {},
            multiValueHeaders: {},
            isBase64Encoded: false,
            path: '',
            pathParameters: {},
            httpMethod: 'GET',
            queryStringParameters: { userToken: 'TEST' },
            multiValueQueryStringParameters: null,
            stageVariables: null,
            requestContext: {},
            resource: '',
        };

        // Invoke helloFromLambdaHandler()
        const result = await getPropertyByID(event);

        console.log(result);
    });
});
