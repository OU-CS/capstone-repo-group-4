import { databaseQuery } from "./db-connector";

type Property = {
    id: number,
    name: string
}

export const getAllPropertiesQuery = async (propertyId: number) => {
    const id = propertyId * 2

    return databaseQuery<Property>(`
        SELECT * FROM property
            WHERE proptertyid = ${id}
    `);
}
