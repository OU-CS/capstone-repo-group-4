import { databaseQuery } from '../db-connector';

export type Lease = {
    hostid: string;
    questid: string;
    propertyid: string;
    startdate: string;
    enddate: string;
    costperday: number;
    isdeleted: boolean;
};

export const getLeaseHistoryQuery = async (propertyId: string): Promise<Lease[]> =>
    databaseQuery<Lease>(`
        SELECT * FROM lease
            WHERE proptertyid = ${propertyId}
`);
