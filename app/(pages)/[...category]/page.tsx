import React from 'react'

import Navbar from '@/Components/Navbar/Navbar'
import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'
import { categoryFunctions } from './categoryFunctions'

export default async function page(props : any) {

  console.log('this is params',props.params);
  console.log('this is searchparams', props.searchParams)

  async function getProductByCategory(){
      let data = {
        category: props.params.category[1]
      }
      const result = await categoryFunctions.getProductByCategory(data);
      return result.data;

  }

  async function getProductBySubCategory(){
    let data = {
      category: props.params.category[1],
      subcategory: props.params.category[2]
    }
    const result = await categoryFunctions.getProductBySubCategory(data);
    return result;
  }

  let cardData;
  console.log(props.params)
  if(props.params.category.length === 2){
    cardData = await getProductByCategory();
  }
  else if(props.params.category.length === 3){
    cardData = await getProductBySubCategory();
  }
  

  return (
    <>
        <Navbar/>
        <CategoryHeader />
        <CategoryCards cardData={cardData} category={props.params.category[1]} />
        <Footer />
    </>
  )
}
 