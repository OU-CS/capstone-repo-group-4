// eslint-disable-next-line import/no-cycle
import { AddNewPropertyParams } from '../../handlers/add-new-property';
import { databaseQuery } from '../db-connector';
import { Property } from './get-all-properties-query';

export const addNewPropertyQuery = async (property: AddNewPropertyParams): Promise<Property[]> =>
    databaseQuery<Property>(`
        INSERT INTO property (size, streetAddr, city, state, zip, imgUrl, pricePerDay, name, description)
        VALUES (${property.size}, ${property.streetAddr}, ${property.city}, ${property.state}, ${property.zip}, ${property.pricePerDay}, ${property.imgUrl}, ${property.name}, ${property.description},)
        RETURNING propertyid;
`);
