import { extendTheme } from '@chakra-ui/react';

const colors = {
    black: '#333',
    blue: '#0083ff',
    blueTint: '#e4f2ff',
    blueShade: '#006ed4',
    red: '#a01f1f'
}

const { blue, blueShade } = colors;

export default extendTheme({
    colors: {
        blue: {
            500: blue,
            600: blueShade
        },
    },
    components: {
        Link: {
            baseStyle: {
                color: blue,
                _hover: {
                    color: blueShade,
                }
            },
        }
    }
});
