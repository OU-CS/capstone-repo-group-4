/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/dist/client/router';
import { Layout } from '../../components/layout';

type QueryParameters = {
    email: string;
    code: string;
}

const AuthConfirm: FC = () => { 
    const [confirmed, setConfirmed] = useState<boolean>();
    const router = useRouter();

    /**
     * Get query parameters from path and confirm sign up
     */
    useEffect(() => {
        if(router) {
            const { email, code } = router.query as QueryParameters;
            if(email && code) {
                confirmSignUp(email, code);
            } else {
                setConfirmed(false);
            }
        }
        
    }, [router])

    /**
     * Confirms the user sign up
     */
    async function confirmSignUp(email: string, code: string) {
        try {
            await Auth.confirmSignUp(email, code);
            setConfirmed(true);
        } catch (error) {
            console.log('error confirming sign up', error);
            setConfirmed(false);
        }
    }
    
    // Loading state
    if(confirmed === undefined) {
        return (<p>Loading...</p>);
    }

    // Email confirmation results
    return(
        <Layout>
            <h1>Email Confirmation</h1>
            {confirmed ? <p>Confirmed!</p> : <p>We were unable to confirm your account</p>}
        </Layout>
    );
}

export default AuthConfirm;
