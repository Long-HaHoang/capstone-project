// import external resources
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";

import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [cartItem, updateCartItem] = useImmer([]);

  function handleCartItem(newCartItem) {
    console.log(newCartItem);

    if (
      cartItem.find((element) => element.id === newCartItem.id) === undefined
    ) {
      updateCartItem([...cartItem, newCartItem]);
    } else {
      updateCartItem([newCartItem]);
      console.log(
        cartItem.find((element) => element.id === newCartItem.id).amount
      );
    }
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
        onHandleCartItem={handleCartItem}
        cartItem={cartItem}
      />
    </SWRConfig>
  );
}
