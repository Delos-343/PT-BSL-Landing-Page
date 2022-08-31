import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar, Socials } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Socials />
    </>
  )
}

export default MyApp
