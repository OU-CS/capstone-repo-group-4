// eslint-disable-next-line import/no-cycle
import { FullProperty } from '../../types/full-property';
import { PropertyId } from '../../types/property-id';
import { databaseQuery } from '../db-connector';

export const addNewPropertyQuery = async (property: FullProperty): Promise<PropertyId[]> =>
    databaseQuery<PropertyId>(`
        INSERT INTO property (propertyId, size, streetAddr, city, state, zip, imgUrl, pricePerDay, name, description)
        VALUES (uuid_generate_v4(), ${property.size}, ${property.streetAddr}, ${property.city}, ${property.state}, ${property.zip}, ${property.imgUrl}, ${property.pricePerDay}, ${property.name}, ${property.description})
        RETURNING propertyId;
`);
