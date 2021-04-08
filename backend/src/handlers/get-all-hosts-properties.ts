import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { getPropertiesFromHostQuery } from '../helpers/queries/get-all-hosts-properties';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type GetHostByIDParams = {
    hostId: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): GetHostByIDParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { hostId } = params;

    if (!hostId) {
        throw new Error('No hostId was specified');
    }

    return { hostId };
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getHostByID: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let hostId: string;

    // Validate query parameters
    try {
        ({ hostId } = validateParameters(event.queryStringParameters));
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await getPropertiesFromHostQuery(hostId);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
