import React, { Component } from 'react'
import Image from 'next/image'
import wishIcon from '/public/Images/wishlisticon.svg'


import './ProductCard.css'

export default function ProductCard(props: any) {
  return (
    <>
        <div className="pc-container">

            <div className="pc-img">
                <Image className='pc-image' src={props.cardDetail?.imgUrl} alt='product-image' width={1000} height={1000}></Image>
            </div>

            <div className="pc-product-name">
                {props.cardDetail?.productName}
            </div>

            <div className="pc-product-des">
                {props.cardDetail?.description}
            </div>

            <div className="pc-product-action">
                <div className="pc-product-price">
                    ₹ {props.cardDetail?.price}/-
                </div>
                <div className="pc-wishlist">
                    <Image className='pc-wishlist-img' src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                </div>
            </div>
        </div>
      </>
  )
}