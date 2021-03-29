import { Button } from '@chakra-ui/button';
import { Box, Heading, HStack, Text } from '@chakra-ui/layout';
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
        <HStack spacing={5} mt={5}>
            <Text fontSize="lg" fontWeight="bold">
                $15<span style={{ fontSize: '16px', fontWeight: 'normal' }}> / night</span>
            </Text>
            <Button colorScheme="blue" size="sm">
                Reserve
            </Button>
        </HStack>
    </Layout>
);

export default Property;
