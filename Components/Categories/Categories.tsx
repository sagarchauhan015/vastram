import React, { Component } from 'react'
import Image from 'next/image'
import './Categories.css'
import blogImg from '/public/Images/blogimg.gif'
import tshirtImg from '/public/Images/shirt.webp'


export default class Categories extends Component {
  render() {
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
              <Image src={tshirtImg} alt='product-image' width={300} height={250}></Image>
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
              <Image src={tshirtImg} alt='product-image' width={300} height={250}></Image>
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
              <Image src={tshirtImg} alt='product-image' width={300} height={250}></Image>
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
          </div>
        </div>
      </>
    )
  }
}
