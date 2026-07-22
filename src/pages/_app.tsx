import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import StructuredData from "../components/StructuredData";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#536B59" />
      </Head>

      <StructuredData />

      <Component {...pageProps} />
    </>
  );
}
