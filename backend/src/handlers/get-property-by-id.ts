import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { getSinglePropertyQuery } from '../helpers/queries/get-property-by-id';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type GetPropertyByIDParams = {
    propertyId: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): GetPropertyByIDParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { propertyId } = params;

    if (!propertyId) {
        throw new Error('No propertyId was specified');
    }

    return { propertyId };
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getPropertyByID: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let propertyId: string;

    // Validate query parameters
    try {
        ({ propertyId } = validateParameters(event.queryStringParameters));
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await getSinglePropertyQuery(propertyId);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
