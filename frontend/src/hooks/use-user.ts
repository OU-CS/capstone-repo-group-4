import { Auth } from "aws-amplify";
import { useEffect } from "react";
import Router from "next/router";
import useSWR from 'swr';

export type User = {
    id: string,
    email: string,
    verified: boolean,
    firstName: string,
    lastName: string
}

export type UserProps = {
    user?: User;
}

export const mapCognitoToUser = (data: any) => {
    const user: User = {
        id: data.attributes.sub,
        email: data.attributes.email,
        verified: data.attributes.email_verified,
        firstName: data.attributes.given_name,
        lastName: data.attributes.family_name
    }

    return user;
}

export const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    return user;
}

type Response = {
    loading: boolean, 
    user?: User
};

/**
 * Gets current authenticated user from user pool
 */
export const useUser = (): Response => {
    const { data, error } = useSWR('/', getUser);

    // We haven't received any data or errors 
    // yet, we're still loading.
    if(data === undefined && error === undefined) {
        return { loading: true };
    }

    // We have data, return to user
    if(data) {
        const user = mapCognitoToUser(data);
        return { loading: false, user };

    }

    // No data was found
    return { loading: false };

}
