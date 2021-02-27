import { FC, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Auth } from 'aws-amplify';
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
    const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const [email] = emailState;
        const [password] = passwordState;

        try {
            const user = await Auth.signIn({
                username: email,
                password
            });

            console.log(user);

            closeModal();
        } catch (error) {
            console.log(error);
        }

        console.log(email);
        console.log(password);
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
