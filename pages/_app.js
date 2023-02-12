// Import external resources
import { SWRConfig } from "swr";

// Import internal resources
import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";
import useStore from "@/hooks/useStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [session] = useStore((state) => [state.session]);

  useEffect(() => {
    !session && router.push("/Redirect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
