import { FC, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { Auth } from "aws-amplify";
import { TextField } from "../inputs/text-field";
import { Modal } from "./modal";
import { AuthModalProps } from "./types";
import styles from './auth.module.scss';
import { Button, CasualButton } from "../inputs/button";

/**
 * Modal to register
 */
export const RegisterModal: FC<AuthModalProps> = ({ switchModal, closeModal }) => {
    const firstNameState = useState('');
    const lastNameState = useState('');
    const emailState = useState('');
    const passwordState = useState('');

    /**
     * Handle creating an account
     */
    const onRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const [firstName] = firstNameState;
        const [lastName] = lastNameState;
        const [email] = emailState;
        const [password] = passwordState;

        try {
            const { user } = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    given_name: firstName,
                    family_name: lastName
                }
            })
            console.log(user);
        } catch (e) {
            console.log(e);
        }
        

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        
        closeModal();
    }

    return (
        <Modal style={styles.register}>
            <div className={styles.header}>
                <h3>Create an account</h3>
                <CasualButton onClick={closeModal}>
                    <FaTimes />
                </CasualButton>
            </div>
            <form onSubmit={onRegister}>
                <div className={styles.name}>
                    <TextField 
                        state={firstNameState}
                        required
                        title="First Name"
                    />
                    <TextField 
                        state={lastNameState}
                        required
                        title="Last Name"
                    />
                </div>
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
                <Button submit>Create account</Button>
            </form>
            <div className={styles.footer}>
                <div className={styles.or}>or</div>
                <CasualButton onClick={switchModal}>
                    Log in
                </CasualButton>
            </div>
        </Modal>
    )
};
