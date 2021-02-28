/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import Amplify from 'aws-amplify';
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../../public/styles/theme'
import { Nav } from '../components';
import awsConfig from '../aws-exports';

// Configure Amplify authentication
Amplify.configure({ ...awsConfig, ssr: true });

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ChakraProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
    </ChakraProvider>
);

export default NextApp;
