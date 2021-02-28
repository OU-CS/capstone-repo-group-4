import { NextPage } from 'next';
import { Login } from '../templates/auth/login';
import { Nav } from '../components';

const NextLogin: NextPage = () => (
    <>
        <Nav />
        <Login />
    </>
);

export default NextLogin;
