/* eslint-disable no-script-url */
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { UserProps, useUser } from '../../hooks/use-user';
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
    };

    return (
        <Skeleton isLoaded={!!user}>
            <Menu>
                <MenuButton as={Button} height="8" rightIcon={<ChevronDownIcon />}>
                    {user.firstName}
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link href="/property/add">Add Listing</Link>
                    </MenuItem>
                    <MenuItem onClick={logOut}>Log out</MenuItem>
                </MenuList>
            </Menu>
        </Skeleton>
    );
};

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const { loading, user } = useUser();

    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <Skeleton isLoaded={!loading}>{user ? <UserProfile user={user} /> : <LoginButton />}</Skeleton>
            </div>
        </div>
    );
};
