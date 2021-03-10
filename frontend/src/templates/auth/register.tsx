import { FC, FormEvent, useState } from 'react';
import { Auth } from 'aws-amplify';
import NextLink from 'next/link';
import { Heading, Button, Link, Alert, useToast } from "@chakra-ui/react"
import { useRouter } from 'next/dist/client/router';
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

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    const router = useRouter();
    const toast = useToast();

    /**
     * Handle creating an account
     */
    const onRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const [firstName] = firstNameState;
        const [lastName] = lastNameState;
        const [email] = emailState;
        const [password] = passwordState;

        setLoading(true);

        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: {
                    given_name: firstName,
                    family_name: lastName
                }
            });

            // Redirect user after sign up
            router.push('/');

            // Send confirmation
            toast({
                description: "Your account has been created! We've sent you an email confirmation.",
                status: "success",
                duration: 8000,
                isClosable: true,
                position: "bottom-left",
            });
        } catch (e) {
            setLoading(false);
            setError(e.message);
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
                        {error && <Alert status="error">{error}</Alert>}
                        <Button 
                            isLoading={loading}
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
                            <Link tabIndex={0}>Log in</Link>
                        </NextLink>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
