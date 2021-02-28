import { NextPage } from 'next';
import { Nav } from '../components';
import Gallery from '../templates/gallery/gallery';

const Index: NextPage = () => (
    <>
        <Nav />
        <Gallery />
    </>
);

export default Index;
