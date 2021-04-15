import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { FC } from 'react';
import SwiperCore, { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

type AllImagesProps = {
    images: string[];
    close: () => void;
    showAll: boolean;
};

const AllImages: FC<AllImagesProps> = ({ showAll, images, close }) => (
    <Box zIndex="100" w="100%" pos="fixed" left="0" top={showAll ? '0' : 'calc(-100vh)'}>
        <Button colorScheme="red" onClick={close} size="sm" zIndex={2} pos="absolute" top={4} right={4}>
            Close
        </Button>
        <Swiper
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                minHeight: '400px',
                background: 'white',
            }}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ type: 'fraction' }}
        >
            {images.map((image, i) => (
                <SwiperSlide
                    key={`${image}${i}`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image src={image} maxW="90%" maxH="calc(100% - 120px)" />
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
);

export default AllImages;
