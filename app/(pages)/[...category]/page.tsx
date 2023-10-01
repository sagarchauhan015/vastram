import React from 'react'

import Navbar from '@/Components/Navbar/Navbar'
import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'
import { categoryFunctions } from './categoryFunctions'

export default function page(props : any) {

  async function getProductByCategory(){
    let data = {
      category: props.params.category[1],
      subcategory: props.params?.category[2]
    }
    const result = await categoryFunctions.getProductByCategory(data);
  }

  getProductByCategory();

  return (
    <>
        <Navbar getProductByCategory = {getProductByCategory} />
        <CategoryHeader />
        <CategoryCards />
        <Footer />
    </>
  )
}
 