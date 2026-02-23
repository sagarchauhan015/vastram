import React, { Component } from 'react'
import Image from 'next/image'
import './Categories.css'
import blogImg from '/public/Images/blogimg.gif'

const tshirtImg = 'https://ik.imagekit.io/jkmgqwabx/vastram/men/tshirt.png?updatedAt=1697276900905';

export default function Categories() {
  return (
    <>
        <div className="ct-container">
          <div className="ct-heading">
            Categories
          </div>
          <div className="ct-menu-wrapper">
          <div className="ct-menu">

            <div className="ct-box">
              <Image src={blogImg} alt='product-image' width={300} height={250}></Image>
              <div className="ct-type">
                Jeans
              </div>
            </div>

            <div className="ct-box">
              <Image src={tshirtImg} alt='product-image' width={300} height={250} unoptimized></Image>
              <div className="ct-type">
                T-shirts
              </div>
            </div>

            <div className="ct-box">
              <Image src={blogImg} alt='product-image' width={300} height={250}></Image>
              <div className="ct-type">
                Trousers
              </div>
            </div>

            <div className="ct-box">
              <Image src={blogImg} alt='product-image' width={300} height={250}></Image>
              <div className="ct-type">
                Jeans
              </div>
            </div>

            <div className="ct-box">
              <Image src={tshirtImg} alt='product-image' width={300} height={250} unoptimized></Image>
              <div className="ct-type">
                T-shirts
              </div>
            </div>

            <div className="ct-box">
              <Image src={blogImg} alt='product-image' width={300} height={250}></Image>
              <div className="ct-type">
                Trousers
              </div>
            </div>

            <div className="ct-box">
              <Image src={tshirtImg} alt='product-image' width={300} height={250} unoptimized></Image>
              <div className="ct-type">
                T-shirts
              </div>
            </div>

            <div className="ct-box">
              <Image src={blogImg} alt='product-image' width={300} height={250}></Image>
              <div className="ct-type">
                Trousers
              </div>
            </div>

            </div>
          <div className="" id='blog-section'></div>
          </div>
        </div>
      </>
  )
}
