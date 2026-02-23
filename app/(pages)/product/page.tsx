import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import NewArrivals from '@/Components/NewArrivals/NewArrivals'
import ProductDetails from '@/Components/ProductDetails/ProductDetails'
import React from 'react'



export default async function Product({ searchParams }: { searchParams: Promise<any> }){
  const resolvedSearchParams = await searchParams;
  
  return (
    <>
        <ProductDetails 
          productId={resolvedSearchParams.productId}
        />
        <NewArrivals />
        <Footer />
    </>
  )
}
