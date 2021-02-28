import { NextPage, GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import { Register } from '../templates/auth/register';

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

const NextRegister: NextPage = () => <Register />;

export default NextRegister;
