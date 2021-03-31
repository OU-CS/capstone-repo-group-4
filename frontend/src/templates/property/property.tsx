import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { Layout } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { Description } from './components/descriptions';
import { Details } from './components/details';
import { Showcase } from './components/showcase';
import { Activities } from './components/tags';

const activities: Activities[] = ['hunting', 'camping', 'fishing'];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes nascetur.\nTortor at auctor urna nunc id cursus metus. Elementum pulvinar etiam non quam lacus. Pulvinar pellentesque habitant morbi tristique. Vitae turpis massa sed elementum. Pellentesque habitant morbi tristique senectus et netus et. Fusce id velit ut tortor pretium. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet.\nConsequat interdum varius sit amet mattis. Blandit libero volutpat sed cras ornare arcu dui vivamus. Duis convallis convallis tellus id interdum velit. Odio facilisis mauris sit amet massa vitae.`;

const Property: FC = () => {
    const { width } = useWindowSize();
    return (
        <Layout maxW="5xl">
            <Box>
                <Heading size="lg">Property View</Heading>
                <Text>Location, EX</Text>
            </Box>
            <Showcase />
            <Stack direction={width < 780 ? 'column' : 'row'} align="flex-start" spacing="42px">
                <Details width={width} host="John Doe" size={128} activities={activities} />
                <Description>{description}</Description>
            </Stack>
        </Layout>
    );
};

export default Property;
