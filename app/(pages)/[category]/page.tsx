'use client'
import React, {useState} from 'react'

import Navbar from '@/Components/Navbar/Navbar'
import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'
import { categoryFunctions } from './categoryFunctions'

export default function page(props : any) {

  const [cardsArray, setCardsArray] = useState<any>()

  async function getProductByCategory(e:any, category:any){
      let data = {
        category: category
      }
      const result = await categoryFunctions.getProductByCategory(data);
      await setCardsArray(result);

  }

  async function getProductBySubCategory(e:any, category:any, subcategory: any){
    let data = {
      category: category,
      subcategory: subcategory
    }
    const result = await categoryFunctions.getProductBySubCategory(data);
    return result;
  }

  return (
    <>
        <Navbar category={props.searchParams.category} getProductByCategory={getProductByCategory} getProductBySubCategory={getProductBySubCategory} />
        <CategoryHeader category={props.searchParams.category} subcategory={props.searchParams.subcategory} />
        <CategoryCards category={props.searchParams.category} cardData={cardsArray}  />
        <Footer />
    </>
  )
}
 