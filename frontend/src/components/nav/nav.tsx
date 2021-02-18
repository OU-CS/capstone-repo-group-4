import { FC } from 'react';
import useWatchModal from '../../hooks/watch-modal';
import Logo from '../logo/logo';
import Modal from '../modal/modal';
import styles from './nav.module.scss';
import { LoginButtonProps } from './types';

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
 * Modal to login
 */
const LoginModal: FC = ({ title, toggleLoginModal, toggleRegisterModal }) => {
    const handleClick = () => {
        toggleLoginModal();
        toggleRegisterModal();
    }
    return <Modal><h1 onClick={handleClick}>{title}</h1></Modal>
};

/**
 * Navigation bar
 */
const Nav: FC = () => {
    const [toggleLoginModal, isLoginModalOpen] = useWatchModal();
    const [toggleRegisterModal, isRegisterModalOpen] = useWatchModal();
    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <Logo />
                <LoginButton toggleLoginModal={toggleLoginModal} />
            </div>

            {/* Modals */}
            {isLoginModalOpen && <LoginModal title="login" toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />}
            {isRegisterModalOpen && <LoginModal title="register" toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />}

        </div>
    );
}

export default Nav;