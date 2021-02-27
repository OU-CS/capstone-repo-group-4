/* eslint-disable no-script-url */
import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { Logo } from '../logo/logo';
import styles from './nav.module.scss';
import { User, useUser } from '../../hooks/use-user';

/**
 * Button to open login modal
 */
const LoginButton: FC = () => (
    <Link href="/login">
        <Button height="8">Log in</Button>
    </Link>
);

type UserProfileProps = {
    user: User;
}

/**
 * Component when user is logged in
 */
const UserProfile: FC<UserProfileProps> = ({ user }) => {
    const router = useRouter();
    
    /**
     * Logs out of current account
     */
    const logOut = async () => {
        await Auth.signOut();
        router.reload();
    }

    return(
        <Button onClick={logOut} height="8">
            {`${user.firstName} ${user.lastName}`}
        </Button>
    );
}

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const user = useUser();
    
    return(
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link href="/"><a><Logo /></a></Link>
                {user ? <UserProfile user={user} /> : <LoginButton />}
            </div>
        </div>
    )
}
