import { Button } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/layout';
import { FC, useState } from 'react';
import AllImages from './all-images';

type ShowcaseProps = {
    images: string[];
};

export const Showcase: FC<ShowcaseProps> = ({ images }) => {
    const [showAll, setShowAll] = useState(false);

    return (
        <>
            <AllImages showAll={showAll} images={images} close={() => setShowAll(false)} />
            <Grid
                my="10"
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
