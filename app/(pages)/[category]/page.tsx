import React from 'react'

import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader'
import CategoryCards from '@/Components/CategoryCards/CategoryCards'
import Footer from '@/Components/Footer/Footer'


export default async function page({ params, searchParams }: { params: Promise<any>, searchParams: Promise<any> }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  return (
    <>
        <CategoryHeader category={resolvedSearchParams.category} subcategory={resolvedSearchParams.subcategory} />
        <CategoryCards category={resolvedSearchParams.category}  />
        <Footer />
    </>
  )
}
 