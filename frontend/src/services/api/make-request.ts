import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiFailedResponse, ApiResponse, ApiSuccessResponse } from './responses';

const MAX_ATTEMPTS = 3;

const axiosClient = axios.create({
    baseURL: 'https://m8fchmasd4.execute-api.us-east-2.amazonaws.com/Prod',
    responseType: 'json',
    validateStatus: () => true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const responseIsSuccessful = (response: AxiosResponse): boolean => {
    if (response.status < 200 || response.status >= 300) {
        return false;
    }

    return true;
};

const buildApiResponse = <T>(response: AxiosResponse, initialConfig: AxiosRequestConfig): ApiResponse<T> => {
    if (!responseIsSuccessful(response)) {
        const failedResponse: ApiFailedResponse = {
            wasSuccessful: false,
            statusCode: response.status,
            error: response.data.error || response.data,
            headers: response.headers,
            request: {
                endpoint: initialConfig.url || '',
                params: initialConfig.params,
            },
        };

        return failedResponse;
    }

    const successResponse: ApiSuccessResponse<T> = {
        wasSuccessful: true,
        statusCode: response.status,
        body: response.data,
        headers: response.headers,
        request: {
            endpoint: initialConfig.url || '',
            params: initialConfig.params,
        },
    };

    return successResponse;
};

export const makeRequest = async <T>(config: AxiosRequestConfig, attempts = 1): Promise<ApiResponse<T>> => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
        ...(config.headers || {}),
    };

    const axiosResponse = await axiosClient.request<T>(config);

    // Retry logic
    if (!responseIsSuccessful(axiosResponse) && attempts < MAX_ATTEMPTS) {
        return makeRequest<T>(config, attempts + 1);
    }

    return buildApiResponse(axiosResponse, config);
};
