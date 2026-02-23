import React from 'react'
import Image from 'next/image'
import blogImg from '/public/Images/blogimg.gif'

const tshirt1 = 'https://ik.imagekit.io/jkmgqwabx/vastram/men/tshirt.png?updatedAt=1697276900905';
const tshirt2 = 'https://ik.imagekit.io/jkmgqwabx/vastram/men/greyShirt.webp?updatedAt=1696135970020';
const tshirt3 = 'https://ik.imagekit.io/jkmgqwabx/vastram/women/tops.png?updatedAt=1697276756549';


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
                    <Image className='fsn-image' src={tshirt1} width={300} height={300} alt='fashion img' unoptimized></Image>
                   </div>
                   <div className="fsn-card-text">
                        Occasion Red
                   </div>
                </div>
                <div className="fsn-card">
                   <div className="fsn-card-img">
                    <Image className='fsn-image' src={tshirt2} width={300} height={300} alt='fashion img' unoptimized></Image>
                   </div>
                   <div className="fsn-card-text">
                        Everyday Polo
                   </div>
                </div>
                <div className="fsn-card">
                   <div className="fsn-card-img">
                    <Image className='fsn-image' src={tshirt3} width={300} height={300} alt='fashion img' unoptimized></Image>
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
