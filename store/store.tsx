'use client'
import React from 'react';
import { create } from 'zustand'


interface CardState {
  cards: productInterface[], 
  updateCards: (items: productInterface[]) => void
}

interface CartState{
  cart: cartInterface[],
  price: number,
  updateCart: (item: cartInterface) => void,
  addQuantity: (item: cartInterface) => void,
  removeQuantity: (item: cartInterface) => void,
  removeProductItem: (item: cartInterface) => void,
}


const useCardsArray = create<CardState>()((set) => ({
  cards: [],
  updateCards: (items) => set((state) => ({
    cards: items
  }))
}))

// const useCartArray = create<CartState>((set) => ({
//   cart: [],
//   price: 0,
//   updateCart: (item) =>
//     set((state) => ({
//       cart: [...state.cart, item],
//       price: Number(state.price) + Number(item.productItem.price),
//    })),
//    addQuantity: (item) =>
//     set((state) => {
//       const updatedCart = state.cart.map((cartItem) =>
//         cartItem.productItem === item.productItem &&
//         cartItem.productSize === item.productSize
//           ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
//           : cartItem
//       );
      
//       if(item.productQuantity >= 1 && item.productQuantity < 10){
//         return {
//           ...state,
//           cart: updatedCart,
//           price:  Number(state.price) + Number(item.productItem.price),
//         };
//       }
//       return {
//         ...state,
//         cart: state.cart,
//         price:  state.price,
//       };
      
//     }),
//     removeQuantity: (item) =>
//     set((state) => {
//       const updatedCart = state.cart.map((cartItem) =>
//         cartItem.productItem === item.productItem &&
//         cartItem.productSize === item.productSize
//           ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
//           : cartItem
//       );

//       if(item.productQuantity > 1 && item.productQuantity <= 10){
//         return {
//           ...state,
//           cart: updatedCart,
//           price:  Number(state.price) - Number(item.productItem.price),
//         };
//       }
//       return {
//         ...state,
//         cart: state.cart,
//         price:  state.price,
//       };
//     }),

// }));

const useCartArray = create<CartState>((set, get) => {
  // Load state from localStorage if available
  const storedState = typeof window !== 'undefined' ? localStorage.getItem('cartState') : null;
  const initialState: CartState = storedState ? JSON.parse(storedState) : {
    cart: [],
    price: 0,
  };

  set(initialState);

  // Save state to localStorage before unloading the page
  
  // if (typeof global?.window !== 'undefined') {
    global.window.addEventListener('beforeunload', () => {
      const currentState: CartState = get();
      localStorage.setItem('cartState', JSON.stringify(currentState));
    });
  // }

  
  return {
    cart: initialState.cart,
    price: initialState.price,
    updateCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
      price: Number(state.price) + Number(item.productItem.price),
   })),
   addQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.productItem === item.productItem &&
        cartItem.productSize === item.productSize
          ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
          : cartItem
      );
      
      if(item.productQuantity >= 1 && item.productQuantity < 10){
        return {
          ...state,
          cart: updatedCart,
          price:  Number(state.price) + Number(item.productItem.price),
        };
      }
      return {
        ...state,
        cart: state.cart,
        price:  state.price,
      };
      
    }),
    removeQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cart.map((cartItem) =>
        cartItem.productItem === item.productItem &&
        cartItem.productSize === item.productSize
          ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
          : cartItem
      );

      if(item.productQuantity > 1 && item.productQuantity <= 10){
        return {
          ...state,
          cart: updatedCart,
          price:  Number(state.price) - Number(item.productItem.price),
        };
      }
      return {
        ...state,
        cart: state.cart,
        price:  state.price,
      };
    }),
    removeProductItem: (item) =>
    set((state) => {
      const updatedCart = state.cart.filter((cartItem) =>
        cartItem.productItem !== item.productItem ||
        cartItem.productSize !== item.productSize
      );

      return {
        ...state,
        cart: updatedCart,
        price: Number(state.price) - Number(item.productItem.price * item.productQuantity),
      };
    }),
  };
});


export { useCardsArray, useCartArray };