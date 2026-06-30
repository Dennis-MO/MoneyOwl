import type { AppProps } from "next/app";
import { FormProvider } from "../context/FormContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
