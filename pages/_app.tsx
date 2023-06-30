import '<Next-project>/styles/globals.css'
import type { AppProps } from 'next/app'
import { Main } from "next/document";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
