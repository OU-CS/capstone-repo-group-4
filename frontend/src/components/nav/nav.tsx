/* eslint-disable no-script-url */
import { FC } from 'react';
import Link from 'next/link';
import { Button, Skeleton } from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { Logo } from '../logo/logo';
import styles from './nav.module.scss';
import { UserProps, useUser } from '../../hooks/use-user';

/**
 * Button to open login modal
 */
const LoginButton: FC = () => (
    <Link href="/login">
        <Button height="8">Log in</Button>
    </Link>
);

/**
 * Component when user is logged in
 */
const UserProfile: FC<Required<UserProps>> = ({ user }) => {
    const router = useRouter();
    
    /**
     * Logs out of current account
     */
    const logOut = async () => {
        await Auth.signOut();
        router.reload();
    }

    return (
        <Skeleton isLoaded={!!user}>
            <Button onClick={logOut} height="8">
                {user.firstName}
            </Button>
        </Skeleton>
    );
}

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const { loading, user } = useUser();

    return(
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link href="/"><a><Logo /></a></Link>
                <Skeleton isLoaded={!loading}>
                    {user ? <UserProfile user={user} /> : <LoginButton />}
                </Skeleton>
            </div>
        </div>
    );
}
