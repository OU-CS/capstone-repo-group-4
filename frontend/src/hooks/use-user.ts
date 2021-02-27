import { Auth } from "aws-amplify";
import useSWR from "swr";

export type User = {
    id: string,
    email: string,
    verified: boolean,
    firstName: string,
    lastName: string
}

const fetcher = async () => {
    const user = await Auth.currentAuthenticatedUser();
    return user;
}

/**
 * Gets current authenticated user from user pool
 */
export const useUser = (): User | void => {
    const {data} = useSWR('/', fetcher);

    if(data) {
        const user: User = {
            id: data.attributes.sub,
            email: data.attributes.email,
            verified: data.attributes.email_verified,
            firstName: data.attributes.given_name,
            lastName: data.attributes.family_name
        }

        return user;
    }

    return undefined;
}
