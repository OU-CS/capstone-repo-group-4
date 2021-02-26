/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import '../../public/styles/global.scss'
import Amplify from 'aws-amplify';
import { Nav } from '../components/nav';
import awsconfig from '../aws-exports';

// Configure Amplify authentication
Amplify.configure(awsconfig);

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <Nav />
        <Component {...pageProps} />
    </>
);

export default NextApp;
