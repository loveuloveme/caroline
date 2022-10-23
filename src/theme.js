import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        apple: {
            black: '#1d1d1f',
            blue: {
                light: 'rgb(10, 132, 255)',
                dark: 'rgb(0, 122, 255)'
            }
        },
        body: '#f5f5f7',
        caroline: {
            blue: '#285dec'
        }
    },
    fonts: {
        heading: '"Open Sans", sans-serif',
        body: '"Raleway", sans-serif',
        mono: '"Roboto Mono", monospace'
    },
    styles: {
        global: () => ({
            body: {
                bg: '#f5f5f7'
            },
        }),
    },
});

export default theme;