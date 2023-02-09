import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initalState = {
    cartItems: [],
    addToCart: (newCartItemObject) => {
      set((currentState) => {
        currentState.cartItems = [...currentState.cartItems, newCartItemObject];
      });
    },
    updateCartItems: (itemIndex, newCartItemObject) => {
      set((state) => {
        state.cartItems[itemIndex].amount += newCartItemObject.amount;
      });
    },
    handleCartItem: (newCartItemObject) => {
      const itemIndex = cartItems.findIndex(
        (element) => element.id === newCartItemObject.id
      );

      const isItemAvaiable =
        cartItems.find((element) => element.id === newCartItemObject.id) ===
        undefined;

      if (isItemAvaiable) {
        addToCart(newCartItemObject);
      } else {
        updateCartItems;
      }
    },
  };

  return initalState;
};

const useStore = create(immer(config));

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

export default useStore;
