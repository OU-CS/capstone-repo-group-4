import { databaseQuery } from '../db-connector';

export type Lease = {
    startTime: string;
    endTime: string;
    price: number;
    propertyId: string;
    guestId: string;
    hostId: string;
};

export const createReservationQuery = async (
    startTime: string,
    endTime: string,
    price: number,
    propertyId: string,
    guestId: string,
    hostId: string,
): Promise<Lease[]> =>
    databaseQuery<Lease>(`
        INSERT INTO lease (hostid, guestid, propertyid, startdate, enddate, costperday, isdeleted)
        VALUES (${hostId}, ${guestId}, ${propertyId}, ${startTime}, ${endTime}, ${price}, ${false});
`);
