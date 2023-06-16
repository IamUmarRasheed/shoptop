import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product: any; quantity: number }>
    ) {
      // Add an item to the cart
      const newItem = action.payload.product.data;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      state.totalQuantity += action.payload.quantity;
      state.totalAmount +=
        action.payload.quantity * action.payload.product.data.price;

      if (!existingItem) {
        // If the item doesn't exist in the cart, add it as a new item
        const totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        // If the item already exists in the cart, update its quantity and total price
        const totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
    },

    increment(state, action) {
      // Increment the quantity of an item in the cart
      const productId = action.payload;
      const item = state.items.find((item) => item._id === productId);

      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },

    decrement(state, action) {
      // Decrement the quantity of an item in the cart
      const productId = action.payload;
      const item = state.items.find((item) => item._id === productId);

      if (item) {
        if (item.quantity === 1) {
          // If the quantity is already 1, remove the item from the cart
          state.items = state.items.filter((item) => item._id !== productId);
        } else {
          // Decrease the quantity and update the total price, total quantity, and total amount
          item.quantity -= 1;
          item.totalPrice -= item.price;
          state.totalQuantity -= 1;
          state.totalAmount -= item.price;
        }
      }
    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      console.log("hello act",action.payload)
      // Remove an item from the cart
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      state.totalQuantity--;
      state.totalAmount -= existingItem?.price!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== productId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.price!;
      }
    },

    clearCart(state: CartState) {
      // Clear the cart and reset it to initial state
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
