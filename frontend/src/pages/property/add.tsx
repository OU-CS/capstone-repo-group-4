import { NextPage } from 'next';
import { Nav } from '../../components';
import AddProperty from '../../templates/add-property/add-property';

const NextAddProperty: NextPage = () => (
    <>
        <Nav />
        <AddProperty />
    </>
);

export default NextAddProperty;
