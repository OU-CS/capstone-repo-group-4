import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import NextLink from "next/link";
import { Heading, Link, Button, Alert, AlertDescription } from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import styles from './auth.module.scss';
import { Input, Layout, PasswordInput } from "../../components";

const Error: FC = ({ children }) => (
    <Alert status="error">{children}</Alert>
);

type VerificationProps = {
    email: string;
    setError: Dispatch<SetStateAction<JSX.Element>>;
}

const VerificationError: FC<VerificationProps> = ({ children, email, setError }) => {
    const [loading, setLoading] = useState(false);
    
    /**
     * Re-sends verification code and refreshes screen
     */
    const handleClick = async () => {
        // TODO: Make sure it's not spammable
        try {
            setLoading(true);
            await Auth.resendSignUp(email);
            setError(undefined);

        } catch (e) {
            console.log(e);
        }

        setLoading(false);
    }

    return (
        <Alert status="error">
            <AlertDescription>
                {children}
            </AlertDescription>
            <Button
                isLoading={loading}
                onClick={handleClick} 
                colorScheme="red"
                size="sm"
                position="absolute"
                right="8px"
            >
                Send Verification
            </Button>
        </Alert>
    );
}

/**
 * Modal to register
 */
export const Login: FC = () => {
    const emailState = useState('');
    const passwordState = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<JSX.Element>();

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
            switch(e.message) {
                case 'Username should be either an email or a phone number.':
                    setError(<Error>Please enter a valid email.</Error>);
                    break;
                case 'Password did not conform with policy: Password not long enough':
                    setError(<Error>Password must be 8 characters long.</Error>);
                    break;
                case 'User is not confirmed.':
                    setError(
                        <VerificationError 
                            setError={setError}
                            email={email}
                        >
                            Email has not been verified.
                        </VerificationError>
                    );
                    break;
                case 'Incorrect username or password.':
                    setError(<Error>Incorrect email or password.</Error>);
                    break;
                case 'User does not exist.':
                    setError(<Error>{e.message}</Error>);
                    break;
                default:
                    setError(<Error>{e.message}</Error>);
            }
        }
    }

    return (
        <Layout>
            <div className={styles.login}>
                <div className={styles.container}>
                    <Heading size="lg">Login</Heading>
                    <form onSubmit={onLogin}>
                        <Input isRequired placeholder="Email address" state={emailState} />
                        <PasswordInput isRequired placeholder="Password" state={passwordState} /> 
                        {error}
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
