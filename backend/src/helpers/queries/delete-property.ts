import { databaseQuery } from '../db-connector';
import { Property } from './get-all-properties-query';

export const deletePropertyQuery = async (propertyId: string): Promise<Property[]> =>
    databaseQuery<Property>(`
        DELETE FROM property
            WHERE propertyid = ${propertyId}
`);
