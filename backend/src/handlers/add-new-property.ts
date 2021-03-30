import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
// eslint-disable-next-line import/no-cycle
import { addNewPropertyQuery } from '../helpers/queries/add-new-property';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type AddNewPropertyParams = {
    size: number;
    streetAddr: string;
    city: string;
    zip: string;
    state: string;
    pricePerDay: number;
    imgUrl: string;
    name: string;
    description: string;
};

/**
 * Validates all query string parameters from api event
 */
export const validateParameters = (params: ParamProps): AddNewPropertyParams => {
    if (!params) {
        throw new Error('No query parameters were specified');
    }

    const { size, streetAddr, city, zip, state, pricePerDay, imgUrl, name, description } = params;

    if (!size) {
        throw new Error('No size was specified');
    }

    if (!streetAddr) {
        throw new Error('No streetAddress was specified');
    }

    if (!city) {
        throw new Error('No city was specified');
    }

    if (!zip) {
        throw new Error('No zip was specified');
    }

    if (!state) {
        throw new Error('No state was specified');
    }

    if (!pricePerDay) {
        throw new Error('No price was specified');
    }

    if (!imgUrl) {
        throw new Error('No imgurl was specified');
    }

    if (!name) {
        throw new Error('No name was specified');
    }

    if (!description) {
        throw new Error('No description was specified');
    }

    return {
        size: Number(size),
        streetAddr,
        city,
        zip,
        state,
        pricePerDay: Number(pricePerDay),
        imgUrl,
        name,
        description,
    };
};

/**
 * Function to add a new property to the database.
 */
export const getPropertyByID: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    let property: AddNewPropertyParams;

    // Validate query parameters
    try {
        property = validateParameters(event.queryStringParameters);
    } catch (e) {
        console.error(e);
        return failedResponse(400, e);
    }

    try {
        // Generates a SQL statement for adding a new property to the database
        // return data from the SQL statement are saved in sqlResponse
        const sqlResponse = await addNewPropertyQuery(property);

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
