import { Button } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import AllImages from './all-images';

const Showcase: FC = () => {
    const router = useRouter();
    const { propertyId } = router.query;
    const [showAll, setShowAll] = useState(false);
    console.log(propertyId);

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

    const images = [
        `https://picsum.photos/seed/${Math.random()}/${getRandomInt(500, 1000)}/${getRandomInt(500, 1000)}`,
        `https://picsum.photos/seed/${Math.random()}/${getRandomInt(500, 1000)}/${getRandomInt(500, 1000)}`,
        `https://picsum.photos/seed/${Math.random()}/${getRandomInt(500, 1000)}/${getRandomInt(500, 1000)}`,
        `https://picsum.photos/seed/${Math.random()}/${getRandomInt(500, 1000)}/${getRandomInt(500, 1000)}`,
        `https://picsum.photos/seed/${Math.random()}/${getRandomInt(500, 1000)}/${getRandomInt(500, 1000)}`,
    ];

    return (
        <>
            {showAll && <AllImages images={images} />}
            <Grid
                position="relative"
                h="400px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={2}
                borderRadius="lg"
                overflow="hidden"
            >
                <GridItem
                    bg={`url(${images[0]})`}
                    bgPos="center"
                    bgSize="cover"
                    rowSpan={2}
                    css={{
                        '@media screen and (max-width: 520px)': {
                            gridColumn: 'span 4/span 4',
                        },
                    }}
                    colSpan={2}
                />
                <GridItem
                    css={{
                        '@media screen and (max-width: 520px)': {
                            display: 'none',
                        },
                        '@media screen and (min-width: 520px) and (max-width: 740px)': {
                            gridColumn: 'span 2/span 2',
                        },
                    }}
                    bg={`url(${images[1]})`}
                    bgPos="center"
                    bgSize="cover"
                />
                <GridItem
                    css={{
                        '@media screen and (max-width: 520px)': {
                            display: 'none',
                        },
                        '@media screen and (min-width: 520px) and (max-width: 740px)': {
                            gridColumn: 'span 2/span 2',
                        },
                    }}
                    bg={`url(${images[2]})`}
                    bgPos="center"
                    bgSize="cover"
                />
                <GridItem
                    css={{
                        '@media screen and (max-width: 740px)': {
                            display: 'none',
                        },
                    }}
                    bg={`url(${images[3]})`}
                    bgPos="center"
                    bgSize="cover"
                />
                <GridItem
                    css={{
                        '@media screen and (max-width: 740px)': {
                            display: 'none',
                        },
                    }}
                    bg={`url(${images[4]})`}
                    bgPos="center"
                    bgSize="cover"
                />
                <Button
                    onClick={() => setShowAll(true)}
                    size="xs"
                    backgroundColor="rgba(240,240,240, 0.8)"
                    right={3}
                    bottom={3}
                    position="absolute"
                >
                    Show all
                </Button>
            </Grid>
        </>
    );
};

export default Showcase;
