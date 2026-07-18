import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StructuredData from "../components/StructuredData";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StructuredData />
      <Component {...pageProps} />
    </>
  );
}
