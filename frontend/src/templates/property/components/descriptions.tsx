import { Heading, Text, VStack } from '@chakra-ui/layout';
import { FC } from 'react';

export const Description: FC = ({ children }) => (
    <VStack align="flex-start">
        <Heading size="md">Description</Heading>
        {children
            .toString()
            .split('\n')
            .map((paragraph, i) => (
                <Text key={`paragraph-${i}`}>{paragraph}</Text>
            ))}
    </VStack>
);
