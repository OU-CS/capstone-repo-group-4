import { APIGatewayProxyResult } from 'aws-lambda';

const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Credentials': true,
};

/**
 * Builds a failed response for handlers
 */
export const failedResponse = (statusCode: number, error: any): APIGatewayProxyResult => ({
    body: JSON.stringify({
        success: false,
        error: error.message || error,
    }),
    statusCode,
    headers,
});

type SuccessPayload = Record<string, any> | [] | string;

/**
 * Builds a failed response for handlers
 */
export const successResponse = (payload: SuccessPayload): APIGatewayProxyResult => ({
    body: JSON.stringify(payload),
    statusCode: 200,
    headers,
});
