// Import external resources
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";

// Import internal resources
import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";
import useStore from "@/hooks/useStore";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error("Ein Fehler ist aufgetreten.");
          }
          return await response.json();
        },
      }}
    >
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
