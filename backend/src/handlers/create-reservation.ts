import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { createReservationQuery } from '../helpers/queries/create-reservation-query';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type CreateReservationPropertyParams = {
    startTime: string;
    endTime: string;
    price: number;
    propertyID: string;
    guestID: string;
    hostID: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): CreateReservationPropertyParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { startTime, endTime, price, propertyID, guestID, hostID } = params;

    if (!startTime) {
        throw new Error('No startTime was specified');
    }
    if (!endTime) {
        throw new Error('No endTime was specified');
    }
    if (!price) {
        throw new Error('No price was specified');
    }
    if (!propertyID) {
        throw new Error('No propertyID was specified');
    }
    if (!guestID) {
        throw new Error('No guestID was specified');
    }
    if (!hostID) {
        throw new Error('No hostID was specified');
    }
    return { startTime, endTime, price: Number(price), propertyID, guestID, hostID };
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const createReservation: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let startTime: string;
    let endTime: string;
    let price: number;
    let propertyID: string;
    let guestID: string;
    let hostID: string;

    // Validate query parameters
    try {
        ({ startTime, endTime, price, propertyID, guestID, hostID } = validateParameters(event.queryStringParameters));
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await createReservationQuery(startTime, endTime, price, propertyID, guestID, hostID);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
