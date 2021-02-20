/**
 * A simple example includes a HTTP get method to get return a message
 */
exports.findUserToken = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getUserTokens only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    let responseStatusCode = 400; 
    let responseBody = "token not found";
    if(event.userToken === 'TEST') {
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
