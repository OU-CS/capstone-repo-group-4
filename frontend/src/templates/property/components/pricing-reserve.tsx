import { Button } from '@chakra-ui/button';
import { HStack, Text } from '@chakra-ui/layout';
import { FC } from 'react';

type PricingReserveProps = {
    price: number;
};

const PricingReserve: FC<PricingReserveProps> = ({ price }) => (
    <HStack justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
            ${price}
            <span style={{ fontSize: '16px', fontWeight: 'normal' }}> / night</span>
        </Text>
        <Button colorScheme="blue" size="sm">
            Reserve
        </Button>
    </HStack>
);

export default PricingReserve;
