/* eslint-disable no-else-return */
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { FC, useEffect, useState } from 'react';
import { Layout } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { getPropertyById } from '../../services/api/api';
import { FullProperty } from '../../services/api/types';
import { getStateAbbreviation } from '../../utils/state-abbreviations';
import { Description } from './components/descriptions';
import { Details } from './components/details';
import { Showcase } from './components/showcase';

const Property: FC = () => {
    const { width } = useWindowSize();
    const [property, setProperty] = useState<FullProperty>();
    useEffect(() => {
        const propertyId = window.location.pathname.replace('/property/', '');
        getPropertyById(propertyId).then((res) => {
            if (res.wasSuccessful) {
                setProperty(res.body);
            } else {
                setProperty(null);
            }
        });
    }, []);

    if (property) {
        return (
            <Layout maxW="5xl">
                <Box>
                    <Heading size="lg">{property.name}</Heading>
                    <Text>
                        {property.city}, {getStateAbbreviation(property.state)}
                    </Text>
                </Box>
                <Showcase
                    images={[property.imgurl, property.imgurl, property.imgurl, property.imgurl, property.imgurl]}
                />
                <Stack direction={width < 780 ? 'column' : 'row'} align="flex-start" spacing="42px">
                    <Details width={width} property={property} />
                    <Description property={property}>{property.description}</Description>
                </Stack>
            </Layout>
        );
    } else if (property === null) {
        return <Text>404</Text>;
    } else {
        return <></>;
    }
};

export default Property;
