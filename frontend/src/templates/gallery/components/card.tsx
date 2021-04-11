import { Badge, Box, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { FullProperty } from '../../../services/api/types';
import { getStateAbbreviation } from '../../../utils/state-abbreviations';

type CardProps = {
    property: FullProperty;
};

export const Card: FC<CardProps> = ({ property }) => (
    <Link href={`/property/${property.propertyid}`}>
        <a>
            <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box bg={`url(${property.imgurl})`} bgPos="center" bgSize="cover" height="220px" />
                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <HStack>
                            <Badge>Fishing</Badge>
                            <Badge>Camping</Badge>
                            <Badge>Hunting</Badge>
                        </HStack>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" title={property.name} isTruncated>
                        {property.name}
                    </Box>

                    <Box color="gray.600">
                        {property.city}, {getStateAbbreviation(property.state)}
                    </Box>

                    <Box mt="1">
                        ${property.priceperday}
                        <Box as="span" color="gray.600" fontSize="sm">
                            {' '}
                            / night
                        </Box>
                    </Box>
                </Box>
            </Box>
        </a>
    </Link>
);
