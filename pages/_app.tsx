import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { TemplateContextProvider } from "../components/Context/TemplateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TemplateContextProvider>
      <Component {...pageProps} />
    </TemplateContextProvider>
  );
}

export default MyApp;
