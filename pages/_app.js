import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
