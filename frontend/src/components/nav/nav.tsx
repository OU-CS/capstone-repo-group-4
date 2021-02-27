/* eslint-disable no-script-url */
import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { Logo } from '../logo/logo';
import styles from './nav.module.scss';

/**
 * Button to open login modal
 */
const LoginButton: FC = () => (
    <Link href="/login">
        <Button height="8">Log in</Button>
    </Link>
);

/**
 * Navigation bar
 */
export const Nav: FC = () => (
    <div className={styles.nav}>
        <div className={styles.container}>
            <Link href="/"><a><Logo /></a></Link>
            <LoginButton />
        </div>
    </div>
)
