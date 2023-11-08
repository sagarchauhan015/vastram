import React from 'react'

import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'


export default function page(props : any) {
  return (
    <>
        <CategoryHeader category={props.searchParams.category} subcategory={props.searchParams.subcategory} />
        <CategoryCards category={props.searchParams.category}  />
        <Footer />
    </>
  )
}
 