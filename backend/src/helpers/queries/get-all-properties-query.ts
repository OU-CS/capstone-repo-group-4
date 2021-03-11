import { databaseQuery } from "../db-connector";

export type Property = {
    id: number,
    name: string
}

export const getAllPropertiesQuery = async () => databaseQuery<Property[]>(`
    SELECT * FROM property
`)
