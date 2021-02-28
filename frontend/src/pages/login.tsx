import { NextPage, GetServerSideProps } from 'next';
import { withSSRContext } from 'aws-amplify';
import { Login } from '../templates/auth/login';

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const { Auth } = withSSRContext(context);
        const user = await Auth.currentAuthenticatedUser();
        if(user) {        
            return {
                redirect: {
                    destination: '/',
                    permanent: true,
                }
            }
        } 
    } catch(e) {
        return {
            props: {}
        }
    }

    return {
        props: {}
    }    
}

const NextLogin: NextPage = () => <Login />;

export default NextLogin;
