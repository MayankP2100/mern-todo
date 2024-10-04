import {extendTheme} from '@chakra-ui/react'
import '@fontsource/oswald'
import '@fontsource/roboto'
import '@fontsource/open-sans'
import '@fontsource/raleway'
import '@fontsource/hind'
import '@fontsource/montserrat'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: 'Oswald',
    body: 'Hind',
  }
})

export default theme