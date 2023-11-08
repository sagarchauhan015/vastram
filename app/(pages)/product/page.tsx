import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import ProductDetails from '@/Components/ProductDetails/ProductDetails'
import React from 'react'



export default function Product(props: any){
  return (
    <>
        <Navbar/>
        <ProductDetails 
          productId={props.searchParams.productId}
        />
        <NewArrivals />
        <Footer />
    </>
  )
}
