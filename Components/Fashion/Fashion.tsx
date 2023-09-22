import React from 'react'
import Image from 'next/image'
import blogImg from '/public/Images/blogimg.gif'
import tshirt1 from '/public/Images/tshirt1.png'
import tshirt2 from '/public/Images/tshirt2.png'
import tshirt3 from '/public/Images/tshirt3.png'


import './Fashion.css'

export default function Fashion() {
  return (
    <>
        <div className="fsn-container">
            <div className="fsn-left">
                <div className="fsn-img">
                    <Image className='fsn-left-image' src={blogImg} width={350} alt='fashion week'></Image>
                </div>
            </div>
            <div className="fsn-right">
                <div className="fsn-card">
                   <div className="fsn-card-img">
                    <Image className='fsn-image' src={tshirt1} width={300} alt='fashion img'></Image>
                   </div>
                   <div className="fsn-card-text">
                        Occasion Red
                   </div>
                </div>
                <div className="fsn-card">
                   <div className="fsn-card-img">
                    <Image className='fsn-image' src={tshirt2} width={300} alt='fashion img'></Image>
                   </div>
                   <div className="fsn-card-text">
                        Everyday Polo
                   </div>
                </div>
                <div className="fsn-card">
                   <div className="fsn-card-img">
                    <Image className='fsn-image' src={tshirt3} width={300} alt='fashion img'></Image>
                   </div>
                   <div className="fsn-card-text">
                        Weekend Strap
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}
