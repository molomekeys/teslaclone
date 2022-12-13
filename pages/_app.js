import '../styles/globals.css'
import Navbar from '../components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main className=' w-screen h-screen absolute '>

        <section>

          <div className='bg-dark w-screen h-screen relative'>
            <div className='fixed z-40'>
              <Navbar />
            </div>
            <Component {...pageProps} />
          </div>

        </section>
      </main>
    </ChakraProvider>)
}

export default MyApp
