import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from "next/app";
import { FormProvider } from "../context/FormContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </MantineProvider>
  );
}
