import { NextPage, GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import { Login } from '../templates/auth/login';

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { Auth } = withSSRContext(context);
        await Auth.currentAuthenticatedUser();
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        } 
    } catch(e) {
        return {
            props: {}
        }
    }
}

const NextLogin: NextPage = () => <Login />;

export default NextLogin;
