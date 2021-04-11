import { StackDivider, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { FC } from 'react';
import { FullProperty } from '../../../services/api/types';
import { Host } from './host';
import PricingReserve from './pricing-reserve';
import { Size } from './size';
import { Activities, Tags } from './tags';

const activities: Activities[] = ['hunting', 'camping', 'fishing'];

interface DetailsProps {
    width: number;
    property: FullProperty;
}

export const Details: FC<DetailsProps> = ({ width, property }) => {
    if (width < 780) {
        return (
            <Wrap align="center" spacing="3">
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <PricingReserve price={property.priceperday} />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Tags activities={activities} />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Size size={property.size} />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Host host="John Doe" />
                </WrapItem>
            </Wrap>
        );
    }
    return (
        <VStack width="100%" divider={<StackDivider />} maxW="200px" spacing="6" alignItems="flex-start" float="right">
            <PricingReserve price={property.priceperday} />
            <Tags activities={activities} />
            <Size size={property.size} />
            <Host host="John Doe" />
        </VStack>
    );
};
