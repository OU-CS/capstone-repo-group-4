// eslint-disable-next-line import/no-cycle
import { FullProperty } from '../../types/full-property';
import { PropertyId } from '../../types/property-id';
import { databaseQuery } from '../db-connector';

export const addNewPropertyQuery = async (property: FullProperty): Promise<PropertyId[]> =>
    databaseQuery<PropertyId>(`
        INSERT INTO property (size, streetAddr, city, state, zip, imgUrl, pricePerDay, name, description)
        VALUES (${property.size}, ${property.streetAddr}, ${property.city}, ${property.state}, ${property.zip}, ${property.pricePerDay}, ${property.imgUrl}, ${property.name}, ${property.description},)
        RETURNING propertyid;
`);
