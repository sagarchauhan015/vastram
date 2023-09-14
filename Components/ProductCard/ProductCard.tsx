import React, { Component } from 'react'
import Image from 'next/image'
import wishIcon from '/public/Images/wishlisticon.svg'
import shirtImg from '/public/Images/shirt.webp'

import './ProductCard.css'

export default class ProductCard extends Component {
  render() {
    return (
      <>
        <div className="pc-container">

            <div className="pc-img">
                <Image className='pc-image' src={shirtImg} alt='product-image' width={300} height={250}></Image>
            </div>

            <div className="pc-product-name">
                Blue Printed Shirt
            </div>

            <div className="pc-product-des">
                Mens Cotton Shirt with Leaf Design printed on Blue shirt with egnormic design
            </div>

            <div className="pc-product-action">
                <div className="pc-product-price">
                    ₹ 699/-
                </div>
                <div className="pc-wishlist">
                    <Image className='pc-wishlist-img' src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                </div>
            </div>
        </div>
      </>
    )
  }
}
