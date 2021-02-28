import { FC, FormEvent, useState } from "react";
import NextLink from "next/link";
import { Heading, Link, Button, Alert } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import styles from './auth.module.scss';
import { Input, Layout, PasswordInput } from "../../components";

/**
 * Modal to register
 */
export const Login: FC = () => {
    const emailState = useState('');
    const passwordState = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    /**
     * Handle logging into account
     */
    const onLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const [email] = emailState;
        const [password] = passwordState;

        setLoading(true);

        try {
            await Auth.signIn({
                username: email,
                password
            });

            window.location.href = '/';
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    }


    return(
        <Layout>
            <div className={styles.login}>
                <div className={styles.container}>
                    <Heading size="lg">Login</Heading>
                    <form onSubmit={onLogin}>
                        <Input isRequired placeholder="Email address" state={emailState} />
                        <PasswordInput isRequired placeholder="Password" state={passwordState} /> 
                        {error && <Alert status="error">{error}</Alert>}
                        <Button 
                            isLoading={loading}
                            colorScheme="blue"
                            type="submit"
                        >
                            Log in
                        </Button>
                    </form>
                    <div className={styles.footer}>
                        <div className={styles.or}>or</div>
                        <NextLink href="/register">
                            <Link tabIndex={0}>Create an account</Link>
                        </NextLink>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
