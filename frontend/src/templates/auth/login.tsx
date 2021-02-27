import { FC, useState } from "react";
import Link from "next/link";
import styles from './auth.module.scss';
import { Button, TextField , Layout } from "../../components";

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
    const onLogin = () => {
        const [email] = emailState;
        const [password] = passwordState;

        console.log(email);
        console.log(password);
    }


    return(
        <Layout>
            <div className={styles.login}>
                <div className={styles.container}>
                    <h2>Login</h2>
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
                        <Link href="/register">
                            <a>Create an account</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
