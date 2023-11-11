'use client'
import { create } from 'zustand'

interface card {
  Id: string,
  productName: string
}

interface CardState {
  cards: card[], 
  updateCards: (items: card[]) => void
}

interface CartState{
  cart: productInterface[],
  updateCart: (items: productInterface[]) => void
}

const useCardsArray = create<CardState>()((set) => ({
  cards: [],
  updateCards: (items) => set((state) => ({
    cards: items
  }))
}))

const useCartArray = create<CartState>()((set) => ({
  cart: [],
  updateCart: (items) => set((state) => ({
    cart: items
  }))
}))

export { useCardsArray, useCartArray };