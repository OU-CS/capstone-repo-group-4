import { makeRequest } from './make-request';
import { ApiResponse } from './responses';
import { FullProperty, GetAllPropertiesRequest, PropertyId } from './types';

export const addNewProperty = (property: FullProperty): Promise<ApiResponse<PropertyId[]>> =>
    makeRequest<PropertyId[]>({
        method: 'POST',
        url: `/property/add`,
        data: { ...property },
    });

// export const createReservation = createReservation;

// export const deleteProperty = deleteProperty;

// export const getAllHostProperties = getAllHostProperties;

export const getAllProperties = (request: GetAllPropertiesRequest): Promise<ApiResponse<FullProperty[]>> =>
    makeRequest<FullProperty[]>({
        method: 'GET',
        url: `/properties/get`,
        params: { ...request },
    });

// export const getLeaseHistory = getLeaseHistory;

export const getPropertyById = (propertyId: string): Promise<ApiResponse<FullProperty>> =>
    makeRequest<FullProperty>({
        method: 'GET',
        url: `/property/get`,
        params: { propertyId },
    });
