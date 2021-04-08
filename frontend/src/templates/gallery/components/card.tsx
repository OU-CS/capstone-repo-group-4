import { Badge, Box, HStack, Image, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';
import { FC, useState } from 'react';

type Property = {
    id: string;
    imageUrl: string;
    title: string;
    formattedPrice: string;
    address: {
        city: string;
        state: string;
    };
};

export const Card: FC = () => {
    const [isLoaded, setLoaded] = useState(false);

    const property: Property = {
        id: '123',
        imageUrl: `https://picsum.photos/seed/${Math.random()}/800/500`,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$100',
        address: {
            city: 'Broken Bow',
            state: 'OK',
        },
    };

    return (
        <Link href={`/property/${property.id}`}>
            <a>
                <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Skeleton isLoaded={isLoaded}>
                        <Image src={property.imageUrl} alt={property.title} onLoad={() => setLoaded(true)} />
                    </Skeleton>
                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            <HStack>
                                <Badge>Fishing</Badge>
                                <Badge>Camping</Badge>
                                <Badge>Hunting</Badge>
                            </HStack>
                        </Box>

                        <Box mt="1" fontWeight="semibold" as="h4" title={property.title} isTruncated>
                            {property.title}
                        </Box>

                        <Box color="gray.600">
                            {property.address.city}, {property.address.state}
                        </Box>

                        <Box mt="1">
                            {property.formattedPrice}
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
};
