import { Heading, Text, VStack } from '@chakra-ui/layout';
import { FC } from 'react';
import { FullProperty } from '../../../services/api/types';
import { Location } from './location';

type DescriptionProps = {
    property: FullProperty;
};

export const Description: FC<DescriptionProps> = ({ property, children }) => (
    <VStack align="flex-start" w="100%">
        <Heading size="md">Description</Heading>
        {children
            .toString()
            .split('\n')
            .map((paragraph, i) => (
                <Text key={`paragraph-${i}`}>{paragraph}</Text>
            ))}

        <Heading pt="12px" size="md">
            Location
        </Heading>
        <Location address={`${property.streetaddr}, ${property.city} ${property.state}`} />
    </VStack>
);
