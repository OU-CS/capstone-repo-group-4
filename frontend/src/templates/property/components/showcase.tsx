import { Button } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { FC } from 'react';

const images = [
    `https://picsum.photos/seed/${Math.random()}/800/500`,
    `https://picsum.photos/seed/${Math.random()}/800/500`,
    `https://picsum.photos/seed/${Math.random()}/800/500`,
    `https://picsum.photos/seed/${Math.random()}/800/500`,
    `https://picsum.photos/seed/${Math.random()}/800/500`,
];

const Showcase: FC = () => {
    const [isLargerThan740, isLargerThan520] = useMediaQuery(['(min-width: 740px)', '(min-width: 520px)']);

    return (
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
                colSpan={!isLargerThan520 ? 4 : 2}
            />
            {isLargerThan520 && (
                <>
                    <GridItem bg={`url(${images[1]})`} bgPos="center" bgSize="cover" colSpan={!isLargerThan740 && 2} />
                    <GridItem bg={`url(${images[2]})`} bgPos="center" bgSize="cover" colSpan={!isLargerThan740 && 2} />
                </>
            )}
            {isLargerThan740 && (
                <>
                    <GridItem bg={`url(${images[3]})`} bgPos="center" bgSize="cover" />
                    <GridItem bg={`url(${images[4]})`} bgPos="center" bgSize="cover" />
                </>
            )}
            <Button size="xs" backgroundColor="rgba(240,240,240, 0.8)" right={3} bottom={3} position="absolute">
                Show all
            </Button>
        </Grid>
    );
};

export default Showcase;
