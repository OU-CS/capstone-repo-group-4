import { APIGatewayProxyHandler } from 'aws-lambda';

/**
 * A simple example includes a HTTP get method to get return a message
 */
export const findUserToken: APIGatewayProxyHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getUserTokens only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    let responseStatusCode = 400; 
    let responseBody = "token not found";
    const userInfo = event.queryStringParameters;

    if (userInfo?.userToken === null) 
        return; 
    
    if(userInfo?.userToken === 'TEST') {
        responseStatusCode = 200;
        responseBody = "token found"
    }

    const response = {
        statusCode: responseStatusCode,
        body: responseBody
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
