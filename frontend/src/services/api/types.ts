export type PropertyId = {
    propertyId: string;
};

export type GalleryProperty = {
    city: string;
    state: string;
    pricePerDay: number;
    imgUrl: string;
    name: string;
};

export type FullProperty = {
    propertyid: string;
    size: number;
    streetaddr: string;
    city: string;
    zip: string;
    state: string;
    priceperday: number;
    imgurl: string;
    name: string;
    description: string;
};

export type AddPropertyReq = {
    size: number;
    streetAddr: string;
    city: string;
    zip: string;
    state: string;
    pricePerDay: number;
    imgUrl: string;
    name: string;
    description: string;
};

export type GetAllPropertiesRequest = {
    startTime: Date;
    endTime: Date;
};
