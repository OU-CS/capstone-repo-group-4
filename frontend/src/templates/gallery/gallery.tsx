import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from '../../components';
import Card from './components/card';

const Gallery: FC = () => (
    <Layout>
        <Heading>Gallery</Heading>
        <Card />
    </Layout>
);

export default Gallery;
