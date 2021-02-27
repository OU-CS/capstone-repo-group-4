import { FC, FormEvent, useState } from 'react';
import NextLink from 'next/link';
import { Heading, Button, Link } from "@chakra-ui/react"
import { Input , Layout, PasswordInput } from '../../components';
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
    const onRegister = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
