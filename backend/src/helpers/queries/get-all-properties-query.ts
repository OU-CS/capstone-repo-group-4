import { databaseQuery } from '../db-connector';

export type Property = {
    id: number;
    name: string;
};

export const getAllPropertiesInRangeQuery = async (startTime: string, endTime: string): Promise<Property[]> =>
    databaseQuery<Property>(`
        SELECT p.propertyid, p.size, p.streetaddr, p.city, p.state, p.zip, p.imgurl, p.pricePerDay, p.name, p.description, p.reservationType, u.userid, u.firstname, u.lastname, u.email, u.phonenumber FROM property as p
        INNER JOIN host as h
        ON p.propertyid = h.propertyid
        INNER JOIN users as u
        ON u.userid = h.userid
        WHERE p.propertyid IN ((SELECT propertyid FROM lease
                    WHERE ('${startTime}' <  startdate AND '${endTime}' < startdate)
                    OR ('${startTime}' > enddate AND '${endTime}' > enddate)
                    ) UNION (SELECT propertyid from property WHERE propertyid NOT IN (SELECT propertyid from lease)));
`);

export const getAllPropertiesQuery = async (): Promise<Property[]> =>
    databaseQuery<Property>(`
        SELECT * FROM property
`);
