import { StackDivider, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { FC } from 'react';
import { Host, HostProps } from './host';
import PricingReserve from './pricing-reserve';
import { Size, SizeProps } from './size';
import { Tags, TagsProps } from './tags';

interface DetailsProps extends TagsProps, SizeProps, HostProps {
    width: number;
}

export const Details: FC<DetailsProps> = ({ activities, size, host, width }) => {
    if (width < 780) {
        return (
            <Wrap align="center" spacing="3">
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <PricingReserve />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Tags activities={activities} />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Size size={size} />
                </WrapItem>
                <WrapItem alignItems="center" h="auto" borderRadius="md" border="1px solid #E2E8F0" p="4">
                    <Host host={host} />
                </WrapItem>
            </Wrap>
        );
    }
    return (
        <VStack width="100%" divider={<StackDivider />} maxW="200px" spacing="6" alignItems="flex-start" float="right">
            <PricingReserve />
            <Tags activities={activities} />
            <Size size={size} />
            <Host host={host} />
        </VStack>
    );
};
