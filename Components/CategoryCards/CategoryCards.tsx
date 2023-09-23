import React from 'react'

import ProductCard from '../ProductCard/ProductCard'
import './CategoryCards.css'

export default function CategoryCards() {
  return (
    <>
        <div className="cc-container">
            <div className="cc-wrapper">
                <div className="cc-left">
                    Filters
                </div>
                <div className="cc-right">
                    <div className="cc-right-header">
                        <div className="cc-header-left">
                            <span className='cc-product-category'>Menswear</span><span className='cc-product-quantity'>(215 products)</span>
                        </div>
                        <div className="cc-header-right">
                            Sort By: 
                        </div>
                    </div>
                    <div className="cc-right-cards">
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                        <div className="cc-product-card-wrapper">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
