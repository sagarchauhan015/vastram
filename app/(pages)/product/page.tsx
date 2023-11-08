import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import ProductDetails from '@/Components/ProductDetails/ProductDetails'
import React from 'react'

export default function product() {
  return (
    <>
        <Navbar/>
        <ProductDetails />
        <NewArrivals />
        <Footer />
    </>
  )
}
