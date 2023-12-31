'use client'
import React from 'react'

import ProductCard from '../ProductCard/ProductCard'
import './CategoryCards.css'
import Filter from '../Filter/Filter'
import Link from 'next/link'

import {useCardsArray} from '@/store/store'

interface propsType{
    category: string,
}

export default function CategoryCards(props: propsType) {
    const cardData = useCardsArray((state)=> state.cards);
  return (
    <>
        <div className="cc-container">
            <div className="cc-wrapper">
                <div className="cc-left">
                    <Filter category={props.category} />
                </div>
                <div className="cc-right">
                    <div className="cc-right-header">
                        <div className="cc-header-left">
                            <span className='cc-product-category'>{props.category} wear</span><span className='cc-product-quantity'>({cardData?.length} products)</span>
                        </div>
                        <div className="cc-header-right">
                            {/* Sort By:  */}
                        </div>
                    </div>
                    <div className="cc-right-cards">
                        {
                            cardData?.length > 0 ?
                            <> 
                            {
                                cardData.map((cardDetial : any)=>{
                                    return(
                                        // /product?productId=${cardDetial.Id} change it later after the DB works,
                                        <Link href={`/product?productId=${cardDetial.Id}`}>
                                            <div className="cc-product-card-wrapper">
                                                <ProductCard cardDetail = {cardDetial} />
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                            </>
                            :
                            <>No Avialiable Products</>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
