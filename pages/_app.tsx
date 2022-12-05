import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LanguageProvider } from '../context/LanguageProvider'
import { Navbar } from '../components/Atoms/Navbar/Navbar'
import { Footer } from '../components/Atoms/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>Community</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* crossorigin */}
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <LanguageProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  </>
  )
}
