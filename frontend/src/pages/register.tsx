import { NextPage } from 'next';
import { Nav } from '../components';
import { Register } from '../templates/auth/register';

const NextRegister: NextPage = () => (
    <>
        <Nav />
        <Register />
    </>
);

export default NextRegister;
