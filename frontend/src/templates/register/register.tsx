import { FC, useState } from 'react';
import Link from 'next/link';
import { TextField } from '../../components/inputs/text-field';
import styles from './register.module.scss';
import { Button } from '../../components/inputs/button';
import { Layout } from '../../components/layout';

/**
 * Modal to register
 */
export const Register: FC = () => {
    const firstNameState = useState('');
    const lastNameState = useState('');
    const emailState = useState('');
    const passwordState = useState('');

    /**
     * Handle creating an account
     */
    const onRegister = () => {
        const [firstName] = firstNameState;
        const [lastName] = lastNameState;
        const [email] = emailState;
        const [password] = passwordState;

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
    }

    return (
        <Layout>
            <div className={styles.register}>
                <div className={styles.container}>
                    <h2>Create an account</h2>
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
                        <Link href="/">
                            <a>Log in</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
