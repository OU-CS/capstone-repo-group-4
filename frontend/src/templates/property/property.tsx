import { Box, Heading, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { Layout } from '../../components';
import { Details } from './components/details';
import { Showcase } from './components/showcase';
import { Activities } from './components/tags';

const activities: Activities[] = ['hunting', 'camping', 'fishing'];

const Property: FC = () => (
    <Layout>
        <Box>
            <Heading size="md">Property View</Heading>
            <Text>Location, EX</Text>
        </Box>
        <Showcase />
        <Details host="John Doe" size={128} activities={activities} />
    </Layout>
);

export default Property;
