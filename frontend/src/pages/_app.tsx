import { ChakraProvider } from '@chakra-ui/react';
import Amplify from 'aws-amplify';
import { AppProps } from 'next/app';
import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import theme from '../../public/styles/theme';
import awsConfig from '../aws-exports';

// Configure Amplify authentication
Amplify.configure({ ...awsConfig, ssr: true });

const NextApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
);

export default NextApp;
