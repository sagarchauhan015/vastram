import React from 'react'

import ProductCard from '../ProductCard/ProductCard'
import './CategoryCards.css'
import Filter from '../Filter/Filter'
import Link from 'next/link'

interface propsType{
    cardData: any,
    category: string,
}

export default function CategoryCards(props: propsType) {
    console.log(props.cardData);
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
                            <span className='cc-product-category'>{props.category} wear</span><span className='cc-product-quantity'>({props.cardData?.length} products)</span>
                        </div>
                        <div className="cc-header-right">
                            {/* Sort By:  */}
                        </div>
                    </div>
                    <div className="cc-right-cards">
                        {
                            props.cardData?.length > 0 ?
                            <> 
                            {
                                props.cardData.map((cardDetial : any)=>{
                                    return(
                                        // /product?productId=${cardDetial.Id} change it later after the DB works,
                                        <Link href={`/product`}>
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
