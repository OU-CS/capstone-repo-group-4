import { FC, useState } from 'react';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { TextField , Button , Layout } from '../../components';
import styles from './auth.module.scss';

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
    const onRegister = async () => {
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
            });

            console.log('User created:', user);
        } catch (error) {
            console.error('Error signing up:', error);
        }
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
                        <Link href="/login">
                            <a>Log in</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
