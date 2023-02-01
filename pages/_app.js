// import external resources
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";

import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [cartItem, setCartItem] = useImmer([]);

  function updateCartItem(newCart) {
    setCartItem(newCart);
  }

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
      <Component
        {...pageProps}
        onUpdateCartItem={updateCartItem}
        cartItem={cartItem}
      />
    </SWRConfig>
  );
}
