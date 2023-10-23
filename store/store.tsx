'use client'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface card {
  Id: string,
  productName: string
}

interface CardState {
  cards: card[], 
  updateCards: (items: card[]) => void
}

const useCardsArray = create<CardState>()((set) => ({
  cards: [],
  updateCards: (items) => set((state) => ({
    cards: items
  }))
}))

export default useCardsArray;