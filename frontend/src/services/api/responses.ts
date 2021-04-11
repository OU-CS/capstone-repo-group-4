export type ApiBaseResponse = {
    statusCode: number;
    headers: Record<string, string>;
    request?: {
        endpoint: string;
        params: Record<string, string | number>;
    };
};

export type ApiSuccessResponse<T> = ApiBaseResponse & {
    wasSuccessful: true;
    body: T;
};

export type ApiFailedResponse = ApiBaseResponse & {
    wasSuccessful: false;
    error: unknown;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailedResponse;
