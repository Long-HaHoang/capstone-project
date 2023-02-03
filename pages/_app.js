// Import external resources
import { SWRConfig } from "swr";
import { useImmer } from "use-immer";

// Import internal resources
import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [cartItems, updateCartItems] = useImmer([]);

  // Duplication is far cheaper than the wrong abstraction.
  // Reduces the cartItem array to the get the total amount
  // of item added to the shopping cart
  const sumUpArray = (accumulator, currentValue) => accumulator + currentValue;
  const sumOfAllItemAmount = cartItems
    .map((item) => item.amount)
    .reduce(sumUpArray, 0);

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
      ? 0
      : Number(cartItems[itemIndex].amount) + Number(newCartItem.amount);

    if (isItemAvaiable) {
      updateCartItems([...cartItems, newCartItem]);
    } else {
      updateCartItems((draft) => {
        draft[itemIndex].amount = updatedItemAmount;
      });
    }
  }

  function deleteCartItem(deleteItemID) {
    updateCartItems(cartItems.filter((item) => item.id !== deleteItemID));
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
      <Layout cartTotal={sumOfAllItemAmount}>
        <Component
          {...pageProps}
          onCartItem={handleCartItem}
          onDeleteItem={deleteCartItem}
          cartItems={cartItems}
        />
      </Layout>
    </SWRConfig>
  );
}
