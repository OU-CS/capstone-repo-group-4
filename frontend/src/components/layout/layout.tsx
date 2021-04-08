import { Container, ContainerProps } from '@chakra-ui/layout';
import { FC } from 'react';

export const Layout: FC<ContainerProps> = ({ children, ...props }) => (
    <Container maxW="6xl" px="8" py="8" {...props}>
        {children}
    </Container>
);
