import { APIGatewayProxyHandler } from 'aws-lambda';
import { databaseQuery } from '../helpers/db-connector';
import { successResponse } from '../helpers/responses';

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getAllProperties: APIGatewayProxyHandler = async (event) => {    
    console.info('received:', event);

    // Generates a SQL statement for returning all the properties from the database
    // return data from the SQL statement are saved in sqlResponse
    const sqlStatement = 'SELECT * FROM property';
    const sqlResponse = await databaseQuery(sqlStatement);

    return successResponse(sqlResponse);
}
