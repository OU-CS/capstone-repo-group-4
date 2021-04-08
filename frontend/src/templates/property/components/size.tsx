import { Text } from '@chakra-ui/layout';
import { FC } from 'react';

export type SizeProps = {
    size: number;
};

export const Size: FC<SizeProps> = ({ size }) => (
    <Text>
        <strong>{size}</strong> acres
    </Text>
);
