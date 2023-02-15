// Import external resources
import { SWRConfig } from "swr";

// Import internal resources
import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";

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
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Long Ha Hoang's simple capstone project. 
          A small shopfront to buy products. It fetches products from a MongoDB and renders the content. 
          Made with next.js
          Tech used in this project.
          next.js, react, styled components, immer, Zustand, MongoDB
          "
        />
        <title>Capstone Store</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
