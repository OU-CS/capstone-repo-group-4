import { Box, Heading, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { Layout } from '../../components';
import Showcase from './components/showcase';

const Property: FC = () => (
    <Layout>
        <Box mb={5}>
            <Heading size="md">Property View</Heading>
            <Text>Location, EX</Text>
        </Box>
        <Showcase />
    </Layout>
);

export default Property;
