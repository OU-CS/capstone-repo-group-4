import { Button } from '@chakra-ui/button';
import { HStack, Text } from '@chakra-ui/layout';
import { FC } from 'react';

const PricingReserve: FC = () => (
    <HStack spacing={5}>
        <Text fontSize="lg" fontWeight="bold">
            $15<span style={{ fontSize: '16px', fontWeight: 'normal' }}> / night</span>
        </Text>
        <Button colorScheme="blue" size="sm">
            Reserve
        </Button>
    </HStack>
);

export default PricingReserve;
