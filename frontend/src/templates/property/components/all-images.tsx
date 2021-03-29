import { Image } from '@chakra-ui/image';
import { Container } from '@chakra-ui/layout';
import { FC } from 'react';

type AllImagesProps = {
    images: string[];
};

const AllImages: FC<AllImagesProps> = ({ images }) => (
    <Container pos="absolute" zIndex={2} top={-10} bg="white">
        {images.map((image) => (
            <Image src={image} />
        ))}
    </Container>
);

export default AllImages;
