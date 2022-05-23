import "../styles/globals.css";
import "../styles/global.sass";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
