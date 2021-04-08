import { databaseQuery } from '../db-connector';
import { GalleryProperty } from '../../types/gallery-property';

export const getAllPropertiesQuery = async (): Promise<GalleryProperty[]> =>
    databaseQuery<GalleryProperty>(`
    SELECT (city, state, pricePerDay, imgUrl, name) FROM property;
`);
