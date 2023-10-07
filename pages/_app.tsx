import type { AppProps } from 'next/app'
import routes from "pages/routes.js"

import '../styles/globals.css'
import Navbar from "../components/navbar.js";

export default function MyApp({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
