import { APIGatewayProxyEventQueryStringParameters, APIGatewayProxyHandler } from 'aws-lambda';
import { getAllPropertiesInRangeQuery, getAllPropertiesQuery } from '../helpers/queries/get-all-properties-query';
import { failedResponse, successResponse } from '../helpers/responses';

export type ParamProps = APIGatewayProxyEventQueryStringParameters | null;

export type GetAllPropertyParams = {
    startTime: string;
    endTime: string;
};

/**
 * A simple example of a lambda that returns data from the Database
 */
export const getAllProperties: APIGatewayProxyHandler = async (event) => {
    console.info('received:', event);
    const { startTime, endTime } = event.queryStringParameters;
    let sqlResponse;

    try {
        // Generates a SQL statement for returning all the properties from the database
        // return data from the SQL statement are saved in sqlResponse
        if (startTime !== 'none' && endTime !== 'none') {
            sqlResponse = await getAllPropertiesInRangeQuery(startTime, endTime);
        } else {
            sqlResponse = await getAllPropertiesQuery();
        }

        console.info('success:', sqlResponse);
        return successResponse(sqlResponse);
    } catch (e) {
        console.error(e);
        return failedResponse(500, e);
    }
};
