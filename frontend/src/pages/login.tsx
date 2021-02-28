import { NextPage, GetServerSideProps } from 'next';
import { Login } from '../templates/auth/login';
import { userServerSideProps } from '../hooks/use-user';
import { Nav } from '../components';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await userServerSideProps(context);
    if(res.props.user) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    return { props: { } }
}

const NextLogin: NextPage = () => (
    <>
        <Nav />
        <Login />
    </>
);

export default NextLogin;
