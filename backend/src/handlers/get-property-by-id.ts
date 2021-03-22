// imports function that connects to the database
import { APIGatewayProxyHandler } from 'aws-lambda';
import {getSinglePropertyQuery} from '../helpers/queries/get-single-property-query';
import { successResponse } from '../helpers/responses';

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getPropertyByID: APIGatewayProxyHandler = async (event) => {
    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Generates a SQL statement for returning all the properties from the database
    // return data from the SQL statement are saved in sqlResponse
    const queryID = event.queryStringParameters.id;
    const sqlResponse = await getSinglePropertyQuery(queryID);

    // All log statements are written to CloudWatch
    console.info('success:', sqlResponse);
    return successResponse(sqlResponse);
}
