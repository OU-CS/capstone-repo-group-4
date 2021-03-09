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
    const userInfo = event.queryStringParameters;
    let responseStatusCode;
    let responseBody;

    if (userInfo?.userToken != null && userInfo?.userToken === 'TEST') 
    {
        responseStatusCode = 200;
        responseBody = "token found"
    }
    else (userInfo?.userToken === 'TEST') {
        responseStatusCode = 400; 
        responseBody = "token not found";
    }

    const response = {
        statusCode: responseStatusCode,
        body: responseBody
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
