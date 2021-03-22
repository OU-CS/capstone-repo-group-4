// Import all functions from get-all-items.js 
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getAllProperties } from '../../../src/handlers/get-all-properties';


// This includes all tests for getAllItemsHandler() 
describe('Test getAllProperties', () => {

    it('should return ids', async () => {
        const event: APIGatewayProxyEvent = {
            body: null,
            headers: {},
            multiValueHeaders: {},
            isBase64Encoded: false,
            path: "",
            pathParameters: {},
            httpMethod: 'GET',
            queryStringParameters: { userToken: "TEST" },
            multiValueQueryStringParameters: null,
            stageVariables: null,
            requestContext: {},
            resource: ""
        }

        // Invoke helloFromLambdaHandler() 
        const result = await getAllProperties(event);

        console.log(result);
    });
});
