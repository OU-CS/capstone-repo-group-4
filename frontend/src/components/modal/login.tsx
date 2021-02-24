import { FC, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Modal } from "./modal";
import { AuthModalProps } from "./types";
import styles from './auth.module.scss';
import { Button, CasualButton, TextField } from "../inputs";

/**
 * Modal to register
 */
export const LoginModal: FC<AuthModalProps> = ({ switchModal, closeModal }) => 
{
    const emailState = useState('');
    const passwordState = useState('');

    /**
     * Handle creating an account
     */
    const onLogin = () => {
        const [email] = emailState;
        const [password] = passwordState;

        console.log(email);
        console.log(password);
        
        closeModal();
    }


    return(
        <Modal style={styles.login}>
            <div className={styles.header}>
                <h3>Login</h3>
                <CasualButton onClick={closeModal}>
                    <FaTimes />
                </CasualButton>
            </div>
            <form onSubmit={onLogin}>
                <TextField
                    state={emailState}
                    required
                    title="Email address"
                />
                <TextField 
                    state={passwordState}
                    required
                    password
                    title="Password"
                />
                <Button submit>Log in</Button>
            </form>
            <div className={styles.footer}>
                <div className={styles.or}>or</div>
                <CasualButton onClick={switchModal}>
                    Create an account
                </CasualButton>
            </div>
        </Modal>
    );
}
