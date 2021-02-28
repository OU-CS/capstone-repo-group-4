import { NextPage, GetServerSideProps } from 'next';
import { userServerSideProps } from '../hooks/use-user';
import { Register } from '../templates/auth/register';

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


const NextRegister: NextPage = () => <Register />;

export default NextRegister;
