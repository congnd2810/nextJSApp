import '../styles/globals.css'
import layout from '../components/layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <layout>
      <Component {...pageProps} />
    </layout>
  )
}

export default MyApp
