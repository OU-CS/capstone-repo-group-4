/* eslint-disable no-script-url */
import { FC, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import {CognitoUserSession} from 'amazon-cognito-identity-js';
import useWatchModal from '../../hooks/watch-modal';
import { Logo } from '../logo';
import styles from './nav.module.scss';
import { LoginButtonProps } from './types';
import { RegisterModal } from '../modal/register';
import { LoginModal } from '../modal';
import { CasualButton } from '../inputs';

/**
 * Button to open login modal
 */
const LoginButton: FC<LoginButtonProps> = ({ toggleLoginModal }) => (
    <CasualButton 
        className={styles.login}
        onClick={toggleLoginModal}
    >
        Log in
    </CasualButton>
);

type User = {
    given_name: string;
}

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const [toggleLoginModal, isLoginModalOpen] = useWatchModal();
    const [toggleRegisterModal, isRegisterModalOpen] = useWatchModal();
    const [user, setUser] = useState<boolean | User>();

    useEffect(() => {
        Auth.currentUserInfo().then((val) => {
            if(val && val.attributes) {
                setUser(val.attributes);
            } else {
                setUser(false);
            }
        });
    }, [])

    /**
     * Switches between login modal and register modal
     */
    const switchModal = () => {
        toggleLoginModal();
        toggleRegisterModal();
    }

    if(user === undefined) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Logo />
                {user ? (
                    <p>
                        Hi,
                        {' '}
                        {user.given_name}
                    </p>
                ) : <LoginButton toggleLoginModal={toggleLoginModal} />}
            </div>

            {/* Modals */}
            {isLoginModalOpen && (
                <LoginModal 
                    closeModal={toggleLoginModal}
                    switchModal={switchModal} 
                />
            )}
            {isRegisterModalOpen && (
                <RegisterModal 
                    closeModal={toggleRegisterModal}
                    switchModal={switchModal} 
                />
            )}
        </div>
    );
}
