import { withSSRContext } from "aws-amplify";
import { GetServerSidePropsContext } from "next";

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

type Response = {
    props: {
        user?: User
    }
}

export const userServerSideProps = async (context: GetServerSidePropsContext): Promise<Response> => {
    try {
        const { Auth } = withSSRContext(context);
        const user = await Auth.currentAuthenticatedUser();
        return {
            props: { user: mapCognitoToUser(user) }
        } 
    } catch(e) {
        return { props: { } }
    }
}
