import { databaseQuery } from '../db-connector';

export type Property = {
    id: number;
    name: string;
};

export const getAllPropertiesQuery = async (startTime: string, endTime: string): Promise<Property[]> =>
    databaseQuery<Property>(`
        SELECT * FROM property
            WHERE propertyid IN (SELECT propertyid FROM lease
            WHERE (startdate NOT BETWEEN '${startTime}' AND '${endTime}')
            AND (enddate NOT BETWEEN '${startTime}' AND '${endTime}'));
`);
