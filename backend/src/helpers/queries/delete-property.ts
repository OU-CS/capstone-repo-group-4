import { databaseQuery } from '../db-connector';
import { PropertyId } from '../../types/property-id';

export const deletePropertyQuery = async (propertyId: string): Promise<PropertyId[]> =>
    databaseQuery<PropertyId>(`
        DELETE FROM property
            WHERE propertyid = ${propertyId}
            RETURNING propertyid;
`);
