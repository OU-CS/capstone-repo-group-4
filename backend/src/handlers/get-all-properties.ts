import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { getAllPropertiesQuery } from '../helpers/queries/get-all-properties-query';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type GetAllPropertyParams = {
    startTime: string;
    endTime: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): GetAllPropertyParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { startTime, endTime } = params;

    if (!startTime) {
        throw new Error('No startTime was specified');
    }
    if (!endTime) {
        throw new Error('No endTime was specified');
    }

    return { startTime, endTime };
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getAllProperties: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let startTime: string;
    let endTime: string;

    // Validate query parameters
    try {
        ({ startTime, endTime } = validateParameters(event.queryStringParameters));
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await getAllPropertiesQuery(startTime, endTime);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
