import { Box, VStack } from '@chakra-ui/layout';
import { FC } from 'react';
import { Host, HostProps } from './host';
import PricingReserve from './pricing-reserve';
import { Size, SizeProps } from './size';
import { Tags, TagsProps } from './tags';

const Separator: FC = () => <Box w="100%" h="1px" bg="rgba(0,0,0,0.1)" />;

interface DetailsProps extends TagsProps, SizeProps, HostProps {}

export const Details: FC<DetailsProps> = ({ activities, size, host }) => (
    <VStack maxW="200px" spacing="6" alignItems="flex-start" float="right">
        <PricingReserve />
        <Separator />
        <Tags activities={activities} />
        <Separator />
        <Size size={size} />
        <Separator />
        <Host host={host} />
    </VStack>
);
