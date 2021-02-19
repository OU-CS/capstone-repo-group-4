/* eslint-disable no-script-url */
import { FC } from 'react';
import useWatchModal from '../../hooks/watch-modal';
import { Logo } from '../logo';
import styles from './nav.module.scss';
import { LoginButtonProps } from './types';
import { RegisterModal } from '../modal/register';
import { LoginModal } from '../modal';

/**
 * Button to open login modal
 */
const LoginButton: FC<LoginButtonProps> = ({ toggleLoginModal }) => (
    <a
        className={`${styles.login} small`}
        onClick={toggleLoginModal}
        href="javascript:void(0);"
    >
        Log in
    </a>
);

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const [toggleLoginModal, isLoginModalOpen] = useWatchModal();
    const [toggleRegisterModal, isRegisterModalOpen] = useWatchModal();
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Logo />
                <LoginButton toggleLoginModal={toggleLoginModal} />
            </div>

            {/* Modals */}
            {isLoginModalOpen && (
                <LoginModal 
                    toggleLoginModal={toggleLoginModal} 
                    toggleRegisterModal={toggleRegisterModal}
                />
            )}
            {isRegisterModalOpen && (
                <RegisterModal 
                    toggleLoginModal={toggleLoginModal} 
                    toggleRegisterModal={toggleRegisterModal} 
                />
            )}
        </div>
    );
}
