'use client'
import { create } from 'zustand'




interface CardState {
  cards: productInterface[], 
  updateCards: (items: productInterface[]) => void
}
interface CartState{
  cart: cartInterface[],
  price: number,
  updateCart: (item: cartInterface) => void
}




const useCardsArray = create<CardState>()((set) => ({
  cards: [],
  updateCards: (items) => set((state) => ({
    cards: items
  }))
}))

const useCartArray = create<CartState>((set) => ({
  cart: [],
  price: 0,
  updateCart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
      price: Number(state.price) + Number(item.productItem.price),
    })),
}));

export { useCardsArray, useCartArray };