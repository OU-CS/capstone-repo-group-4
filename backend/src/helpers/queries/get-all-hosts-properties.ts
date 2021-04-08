import { databaseQuery } from '../db-connector';
import { Property } from './get-all-properties-query';

export const getPropertiesFromHostQuery = async (hostId: string): Promise<Property[]> =>
    databaseQuery<Property>(`
       SELECT * FROM property WHERE propertyid IN (SELECT propertyid FROM host
                                                    WHERE userid = ${hostId})
`);
