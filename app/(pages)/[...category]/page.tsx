import React from 'react'

import Navbar from '@/Components/Navbar/Navbar'
import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'

export default function page(prop : any) {
  console.log(prop)
  return (
    <>
        <Navbar />
        <CategoryHeader />
        <CategoryCards />
        <Footer />
    </>
  )
}
 