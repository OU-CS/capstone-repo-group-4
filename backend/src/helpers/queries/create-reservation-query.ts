import { databaseQuery } from '../db-connector';

export const createReservationQuery = async (
    startTime: string,
    endTime: string,
    price: number,
    propertyId: string,
    guestId: string,
    hostId: string,
): Promise<Property[]> =>
    databaseQuery<Property>(`
        INSERT INTO lease (hostid, guestid, propertyid, startdate, enddate, costperday, isdeleted)
        VALUES (${hostId}, ${guestId}, ${propertyId}, ${startTime}, ${endTime}, ${price}, ${false});
`);
