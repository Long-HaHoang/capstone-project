// Import external resources
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";

// Import internal resources
import GlobalStyle from "@/styles";
import Head from "next/head";
import ShopHeader from "@/components/ShopHeader";

export default function App({ Component, pageProps }) {
  const [cartItems, updateCartItems] = useImmer([]);
  const [cartTotal, setCartTotal] = useImmer(0);

  function handleCartTotal(counter) {
    setCartTotal(cartTotal + counter);
  }

  function handleCartItem(newCartItem) {
    const itemIndex = cartItems.findIndex(
      (element) => element.id === newCartItem.id
    );

    const updatedItemAmount =
      cartItems.find((element) => element.id === newCartItem.id) === undefined
        ? 12345
        : Number(cartItems[itemIndex].amount) + Number(newCartItem.amount);

    if (
      cartItems.find((element) => element.id === newCartItem.id) === undefined
    ) {
      updateCartItems([...cartItems, newCartItem]);
    } else {
      updateCartItems((draft) => {
        draft[itemIndex].amount = updatedItemAmount;
      });
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
      <ShopHeader cartTotal={cartTotal} />
      <Component
        {...pageProps}
        onHandleCartItem={handleCartItem}
        handleCartTotal={handleCartTotal}
        cartItems={cartItems}
        cartTotal={cartTotal}
      />
    </SWRConfig>
  );
}
