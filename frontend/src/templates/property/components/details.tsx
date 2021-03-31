import { StackDivider, VStack } from '@chakra-ui/layout';
import { FC } from 'react';
import { Host, HostProps } from './host';
import PricingReserve from './pricing-reserve';
import { Size, SizeProps } from './size';
import { Tags, TagsProps } from './tags';

interface DetailsProps extends TagsProps, SizeProps, HostProps {}

export const Details: FC<DetailsProps> = ({ activities, size, host }) => (
    <VStack width="100%" divider={<StackDivider />} maxW="200px" spacing="6" alignItems="flex-start" float="right">
        <PricingReserve />
        <Tags activities={activities} />
        <Size size={size} />
        <Host host={host} />
    </VStack>
);
