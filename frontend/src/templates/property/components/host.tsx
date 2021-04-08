import { Text } from '@chakra-ui/layout';
import { FC } from 'react';

export type HostProps = {
    host: string;
};

export const Host: FC<HostProps> = ({ host }) => <Text>By {host}</Text>;
