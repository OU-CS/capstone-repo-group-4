import { FC } from "react";
import { Modal } from "./modal";
import { AuthModalProps } from "./types";
import styles from './login.module.scss';

/**
 * Modal to register
 */
export const LoginModal: FC<AuthModalProps> = ({ switchModal }) => (
    <Modal style={styles.login}>
        <button 
            type="button"
            onClick={switchModal}
        >
            Login
        </button>
    </Modal>
);
