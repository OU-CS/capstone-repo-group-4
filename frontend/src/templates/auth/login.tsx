import { FC, FormEvent, useState } from "react";
import NextLink from "next/link";
import { Heading, Link, Button } from "@chakra-ui/react";
import styles from './auth.module.scss';
import { Input, Layout, PasswordInput } from "../../components";

/**
 * Modal to register
 */
export const Login: FC = () => 
{
    const emailState = useState('');
    const passwordState = useState('');

    /**
     * Handle creating an account
     */
    const onLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const [email] = emailState;
        const [password] = passwordState;

        console.log(email);
        console.log(password);
    }


    return(
        <Layout>
            <div className={styles.login}>
                <div className={styles.container}>
                    <Heading size="lg">Login</Heading>
                    <form onSubmit={onLogin}>
                        <Input isRequired placeholder="Email address" state={emailState} />
                        <PasswordInput isRequired placeholder="Password" state={passwordState} /> 
                        <Button colorScheme="blue" type="submit">Log in</Button>
                    </form>
                    <div className={styles.footer}>
                        <div className={styles.or}>or</div>
                        <NextLink href="/register">
                            <Link>Create an account</Link>
                        </NextLink>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
