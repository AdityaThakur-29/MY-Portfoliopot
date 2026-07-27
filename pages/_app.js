import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=nunito@400,600,700,800&f[]=bebas-neue@400&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
