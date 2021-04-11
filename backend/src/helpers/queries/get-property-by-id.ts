import { FullProperty } from '../../types/full-property';
import { databaseQuery } from '../db-connector';

export const getSinglePropertyQuery = async (propertyId: string): Promise<FullProperty[]> =>
    databaseQuery<FullProperty>(`
        SELECT * FROM property
            WHERE "propertyid" = '${propertyId}';
`);
