import { FC, FormEvent, useState } from 'react';
import { Auth } from 'aws-amplify';
import NextLink from 'next/link';
import { Heading, Button, Link } from "@chakra-ui/react"
import { Layout , Input, PasswordInput } from '../../components';

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
    const onRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                    <Heading size="lg">Create an account</Heading>
                    <form onSubmit={onRegister}>
                        <div className={styles.name}>
                            <Input isRequired placeholder="First name" state={firstNameState} />
                            <Input isRequired placeholder="Last name" state={lastNameState} />
                        </div>
                        <Input 
                            isRequired
                            placeholder="Email address"
                            state={emailState}
                        />
                        <PasswordInput 
                            isRequired
                            placeholder="Password"
                            state={passwordState}
                        />
                        <Button 
                            className={styles.button}
                            colorScheme="blue"
                            type="submit"
                        >
                            Create account
                        </Button>
                    </form>
                    <div className={styles.footer}>
                        <div className={styles.or}>or</div>
                        <NextLink href="/login">
                            <Link>Log in</Link>
                        </NextLink>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
