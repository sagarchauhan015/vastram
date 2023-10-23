import React, {useState} from 'react'

import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'


export default function page(props : any) {
  // const [cardsArray, setCardsArray] = useState<any>()

  // async function getProductByCategory(){
  //   router.push("/men?category=men")
  //     let data = {
  //       category: props.searchParams.category
  //     }
  //     const result = await categoryFunctions.getProductByCategory(data);
  //     await setCardsArray(result);
  // }

  // async function getProductBySubCategory(){
  //   let data = {
  //     category: props.searchParams.category,
  //     subcategory: props.searchParams.subcategory
  //   }
  //   const result = await categoryFunctions.getProductBySubCategory(data);
  //   await setCardsArray(result);
  // }

  return (
    <>
        <CategoryHeader category={props.searchParams.category} subcategory={props.searchParams.subcategory} />
        <CategoryCards category={props.searchParams.category} cardData={undefined}  />
        <Footer />
    </>
  )
}
 