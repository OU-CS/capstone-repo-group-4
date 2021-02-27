/* eslint-disable no-script-url */
import { FC } from 'react';
import useWatchModal from '../../hooks/watch-modal';
import { Logo } from '../logo';
import styles from './nav.module.scss';
import { LoginButtonProps } from './types';
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

/**
 * Navigation bar
 */
export const Nav: FC = () => {
    const [toggleLoginModal, isLoginModalOpen] = useWatchModal();

    /**
     * Switches between login modal and register modal
     */
    const switchModal = () => {
        toggleLoginModal();
    }

    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Logo />
                <LoginButton toggleLoginModal={toggleLoginModal} />
            </div>

            {/* Modals */}
            {isLoginModalOpen && (
                <LoginModal 
                    closeModal={toggleLoginModal}
                    switchModal={switchModal} 
                />
            )}
        </div>
    );
}
