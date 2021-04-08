import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { deletePropertyQuery } from '../helpers/queries/delete-property';
import { failedResponse, successResponse } from '../helpers/responses';
import { PropertyId } from '../types/property-id';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): PropertyId => {
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
 * Lambda that deletes a property form the databasee given propertyId
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
        // Generates a SQL statement for deleting a property from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await deletePropertyQuery(propertyId);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
