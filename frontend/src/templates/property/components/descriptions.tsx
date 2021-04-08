import { Heading, Text, VStack } from '@chakra-ui/layout';
import { FC } from 'react';
import { Location } from './location';

export const Description: FC = ({ children }) => (
    <VStack align="flex-start">
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
        <Location address="University of Oklahoma, Norman OK" />
    </VStack>
);
