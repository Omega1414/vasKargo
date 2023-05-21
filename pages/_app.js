import '../styles/globals.css';
import '../testimonialSlider.css';
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
  <title>Vasif.</title>
</Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;
