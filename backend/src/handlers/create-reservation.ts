import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { createReservationQuery } from '../helpers/queries/create-reservation-query';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type CreateReservationPropertyBody = {
    startTime: string;
    endTime: string;
    price: number;
    propertyId: string;
    guestId: string;
    hostId: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): CreateReservationPropertyBody => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { startTime, endTime, price, propertyId, guestId, hostId } = params;

    if (!startTime) {
        throw new Error('No startTime was specified');
    }
    if (!endTime) {
        throw new Error('No endTime was specified');
    }
    if (!price) {
        throw new Error('No price was specified');
    }
    if (!propertyId) {
        throw new Error('No propertyID was specified');
    }
    if (!guestId) {
        throw new Error('No guestID was specified');
    }
    if (!hostId) {
        throw new Error('No hostID was specified');
    }
    return { startTime, endTime, price: Number(price), propertyId, guestId, hostId };
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const createReservation: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let startTime: string;
    let endTime: string;
    let price: number;
    let propertyId: string;
    let guestId: string;
    let hostId: string;

    // Validate query parameters
    try {
        ({ startTime, endTime, price, propertyId, guestId, hostId } = validateParameters(JSON.parse(event.body)));
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await createReservationQuery(startTime, endTime, price, propertyId, guestId, hostId);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
