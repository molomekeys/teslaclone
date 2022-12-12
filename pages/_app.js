import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (

    <main className='relative w-screen h-screen '>
      <div className='z-20 fixed'>
        <Navbar className="fixed" />
      </div>
      <Component {...pageProps} />
    </main>)
}

export default MyApp
