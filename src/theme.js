import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        apple: {
            black: '#1d1d1f',
            blue: {
                light: 'rgb(10, 132, 255)',
                dark: 'rgb(0, 122, 255)'
            }
        }
    },
    fonts: {
        body: `'Raleway', sans-serif`
    },
});

export default theme;