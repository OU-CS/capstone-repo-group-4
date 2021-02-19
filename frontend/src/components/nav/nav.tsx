import { FC } from 'react';
import useWatchModal from '../../hooks/watch-modal';
import { Logo } from '../logo';
import styles from './nav.module.scss';
import { LoginButtonProps } from './index';
import { RegisterModal } from '../modal/register';
import { LoginModal } from '../modal';

/**
 * Button to open login modal
 */
const LoginButton: FC<LoginButtonProps> = ({ toggleLoginModal }) => (
    <p
        onClick={toggleLoginModal}
        className={`${styles.login} small`}
    >
        Log in
    </p>
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
            {isLoginModalOpen && 
                <LoginModal 
                    toggleLoginModal={toggleLoginModal} 
                    toggleRegisterModal={toggleRegisterModal} 
                />
            }
            {isRegisterModalOpen && 
                <RegisterModal 
                    toggleLoginModal={toggleLoginModal} 
                    toggleRegisterModal={toggleRegisterModal} 
                />
            }
        </div>
    );
}
