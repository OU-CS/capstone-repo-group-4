import { APIGatewayProxyResult } from 'aws-lambda';

/**
 * Builds a failed response for handlers
 */
export const failedResponse = (statusCode: number, message: string): APIGatewayProxyResult => ({
    body: JSON.stringify({
        success: false,
        error: message,
    }),
    statusCode
});

type SuccessPayload = Record<string, any> | [] | string;

/**
 * Builds a failed response for handlers
 */
export const successResponse = (payload: SuccessPayload): APIGatewayProxyResult => ({
    body: JSON.stringify(payload),
    statusCode: 200
});
