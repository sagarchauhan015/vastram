import React from 'react'

import Navbar from '@/Components/Navbar/Navbar'
import Categories from '@/Components/Categories/Categories'
import Footer from '@/Components/Footer/Footer'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import Blog from '@/Components/Blog/Blog'
import Fashion from '@/Components/Fashion/Fashion'
import AboveTheFold from '@/Components/AboveTheFold/AboveTheFold'


export default function page() {
  return (
    <>
      <Navbar />
      <AboveTheFold />
      <NewArrivals />
      <Fashion />
      <Categories />
      <Blog />
      <Footer />
    </>
  )
}
