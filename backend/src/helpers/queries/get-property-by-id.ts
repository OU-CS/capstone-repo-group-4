import { databaseQuery } from '../db-connector';
import { Property } from './get-all-properties-query';

export const getSinglePropertyQuery = async (propertyId: string): Promise<Property[]> =>
    databaseQuery<Property>(`
        SELECT * FROM property
            WHERE propertyID = ${propertyId}
`);
