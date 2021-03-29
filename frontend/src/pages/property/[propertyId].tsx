import { NextPage } from 'next';
import { Nav } from '../../components';
import Property from '../../templates/property/property';

const NextLogin: NextPage = () => (
    <>
        <Nav />
        <Property />
    </>
);

export default NextLogin;
