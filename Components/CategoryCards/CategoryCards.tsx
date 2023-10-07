import React from 'react'

import ProductCard from '../ProductCard/ProductCard'
import './CategoryCards.css'
import Filter from '../Filter/Filter'

export default function CategoryCards(props: any) {
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
                            <span className='cc-product-category'>Menswear</span><span className='cc-product-quantity'>(215 products)</span>
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
                                        <div className="cc-product-card-wrapper">
                                            <ProductCard cardDetail = {cardDetial} />
                                        </div>
                                    )
                                })
                            }
                            </>
                            :
                            <>No Avialiable data</>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
