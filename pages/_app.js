import Head from "next/head"

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css'

// own css files here
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp