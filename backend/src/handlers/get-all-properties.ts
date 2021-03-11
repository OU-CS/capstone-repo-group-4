import { APIGatewayProxyHandler } from 'aws-lambda';
import { databaseQuery } from '../helpers/db-connector';
import { failedResponse, successResponse } from '../helpers/responses';

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getAllProperties: APIGatewayProxyHandler = async (event) => {    
    console.info('received:', event);

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlStatement = 'SELECT * FROM property';
        const sqlResponse = await databaseQuery(sqlStatement);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e.message);
    }
}
