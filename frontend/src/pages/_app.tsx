import React from 'react';
import { AppProps } from 'next/app';
import '../../public/styles/global.scss'
import { Nav } from '../components/nav';

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <Nav />
        <Component {...pageProps} />
    </>
);

export default NextApp;
