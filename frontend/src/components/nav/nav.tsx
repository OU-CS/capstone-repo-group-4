/* eslint-disable no-script-url */
import { FC } from 'react';
import Link from 'next/link';
import { Logo } from '../logo/logo';
import styles from './nav.module.scss';

/**
 * Button to open login modal
 */
const LoginButton: FC = () => (
    <Link href="/login">
        <a className={styles.login}>Log in</a>
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
