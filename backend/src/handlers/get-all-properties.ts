// imports function that connects to the database
import { APIGatewayProxyHandler } from 'aws-lambda';
import { databaseQuery } from '../helpers/db-connector';

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getAllProperties: APIGatewayProxyHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getUserTokens only accept GET method, you tried: ${event.httpMethod}`);
    }
    
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Generates a SQL statement for returning all the properties from the database
    // return data from the SQL statement are saved in sqlResponse
    const sqlStatement = 'SELECT * FROM property';
    const sqlResponse = await databaseQuery(sqlStatement);

    const response = {
        statusCode: 200,
        body: sqlResponse
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
