import { databaseQuery } from '../db-connector';
import { FullProperty } from '../../types/full-property';

export const getSinglePropertyQuery = async (propertyId: string): Promise<FullProperty[]> =>
    databaseQuery<FullProperty>(`
        SELECT * FROM property
            WHERE propertyid = ${propertyId}
`);
