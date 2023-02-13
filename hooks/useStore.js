import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initalState = {
    cartItems: [],
    position: "LandingPage",
    session: false,
    role: "guest",
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

    updatePosition: (newPosition) => {
      set((draft) => {
        draft.position = newPosition;
      });
    },
    resetPosition: () => {
      set((draft) => {
        draft.position = "Login";
      });
    },
    updateSession: (sessionSetter) => {
      set((draft) => {
        draft.session = sessionSetter;
      });
    },
    resetSession: () => {
      set((draft) => {
        draft.session = false;
      });
    },
    updateRole: (newRole) => {
      set((draft) => {
        draft.role = newRole;
      });
    },
  };

  return initalState;
};

const useStore = create(immer(config));

export default useStore;
