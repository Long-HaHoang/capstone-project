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

  /**
   * Takes a new couter number and sets the cartTotal state with
   * the sum of the old value and new value
   * @param {number} counter - The new count number to be added to the total
   */
  function handleCartTotal(counter) {
    setCartTotal(cartTotal + counter);
  }

  /**
   * Checks if the object is already added to the shopping cart,
   * and conditionally adds it to an array or assign a new amount.
   * @param {Object} newCartItem - A product item object
   */
  function handleCartItem(newCartItem) {
    const itemIndex = cartItems.findIndex(
      (element) => element.id === newCartItem.id
    );

    const isItemAvaiable =
      cartItems.find((element) => element.id === newCartItem.id) === undefined;

    const updatedItemAmount = isItemAvaiable
      ? 12345
      : Number(cartItems[itemIndex].amount) + Number(newCartItem.amount);

    if (isItemAvaiable) {
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
