import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type UserTokenParams = {
    userToken: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): UserTokenParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { userToken } = params;

    if (!userToken) {
        throw new Error('No userToken was specified');
    }

    return { userToken };
};

/**
 * A simple example includes a HTTP get method to get return a message
 */
export const findUserToken: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);

    try {
        validateParameters(event.queryStringParameters);
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    console.info('Token found');
    return successResponse('Token found');
};
