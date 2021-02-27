import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import styles from './logo.module.scss';

export const Logo: FC = () => (
    <Heading className={styles.logo}>
        Roam
    </Heading>
);
