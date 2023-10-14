import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import carretIcon from 'public/Images/carret_black.svg'


import './ProductDetails.css'

export default function ProductDetails() {
  return (
    <>
        <div className="pd-container">
            <div className="pd-breadcrums">
                <div className="pd-route">
                    <Link className='pd-route-link' href={"/"}>Home </Link>
                    <Image className='pd-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                    <Link className='pd-route-link' href={"/"}>Men </Link>
                    <Image className='pd-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                    <Link className='pd-route-link' href={"/"}>T-shirts </Link>
                </div>
            </div>
            <div className="pd-img-detail">
                <div className="pd-img">
                    <Image className='pd-product-image' src="https://ik.imagekit.io/jkmgqwabx/vastram/men/greyShirt.webp?updatedAt=1696135970020" width={1000} height={1000} alt='carret'></Image>
                </div>
                <div className="pd-detail">

                </div>
            </div>
        </div>
    </>
  )
}
