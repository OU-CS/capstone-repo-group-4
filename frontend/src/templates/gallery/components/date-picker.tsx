import { Container, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { Calendar } from 'react-date-range';

export const DateRangePicker: FC = () => (
    <Container>
        <Text>Date range picker</Text>
        <Calendar date={new Date()} />
    </Container>
);
