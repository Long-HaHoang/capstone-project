import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initalState = {
    cartItems: [],
    addToCart: (newItemObject) => {
      set((draft) => {
        draft.cartItems.push(newItemObject);
      });
    },
    updateCartItems: (newCartItems) => {
      set((state) => {
        state.cartItems = newCartItems;
      });
    },
    removeCartItem: (id) =>
      set((draft) => {
        draft.cartItems = draft.cartItems.filter((item) => item.id !== id);
      }),
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
