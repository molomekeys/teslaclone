import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (

    <main className=' w-screen h-screen absolute '>

      <section>

        <div className='bg-dark w-screen h-screen relative'>
          <div className='absolute z-40'>
            <Navbar />
          </div>
          <Component {...pageProps} />
        </div>

      </section>
    </main>)
}

export default MyApp
