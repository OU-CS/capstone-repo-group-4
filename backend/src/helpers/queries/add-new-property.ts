import { AddNewPropertyParams } from '../../handlers/add-new-property';
import { databaseQuery } from '../db-connector';
import { Property } from './get-all-properties-query';

export const addNewPropertyQuery = async (property: AddNewPropertyParams): Promise<Property[]> =>
    databaseQuery<Property>(`
        INSERT INTO property (name, size, streetAddr, city, state, zip, imgUrl, pricePerDay)
        VALUES (${property.name}, ${property.size}, ${property.streetAddr}, ${property.city}, ${property.state}, ${property.zip}, ${property.pricePerDay}, ${property.imgUrl})
        RETURNING propertyid;
`);
