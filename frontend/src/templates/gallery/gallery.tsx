import { SimpleGrid, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Layout } from '../../components';
import { getAllProperties } from '../../services/api/api';
import { FullProperty } from '../../services/api/types';
import { Card } from './components/card';
import { DateRangePicker, RangeState } from './components/date-picker';

const Gallery: FC = () => {
    const now = new Date();
    const rangeState = useState<RangeState>({
        startDate: now,
        endDate: now,
        key: 'selection',
    });
    const [properties, setProperties] = useState<FullProperty[]>();

    useEffect(() => {
        getAllProperties({
            startTime: new Date('1/1/1969'),
            endTime: new Date('1/1/1969'),
        }).then((res) => {
            if (res.wasSuccessful) {
                setProperties(res.body);
            }
        });
    }, []);

    return (
        <Layout>
            <DateRangePicker setProperties={setProperties} rangeState={rangeState} now={now} />
            {properties && properties.length > 0 ? (
                <SimpleGrid minChildWidth="300px" width="100%" spacing="25px">
                    {properties.map((property) => (
                        <Card key={property.streetaddr} property={property} />
                    ))}
                </SimpleGrid>
            ) : (
                <Text>No properties found</Text>
            )}
        </Layout>
    );
};
export default Gallery;
