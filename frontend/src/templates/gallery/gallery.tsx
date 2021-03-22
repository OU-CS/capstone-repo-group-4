import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';
import { Layout } from '../../components';
import { Card } from './components/card';
import { DateRangePicker } from './components/date-picker';

const Gallery: FC = () => (
    <Layout>
        <DateRangePicker />
        <SimpleGrid minChildWidth="300px" width="100%" spacing="25px">
            <Card />
            <Card />
            <Card />
            <Card />
        </SimpleGrid>
    </Layout>
);

export default Gallery;
