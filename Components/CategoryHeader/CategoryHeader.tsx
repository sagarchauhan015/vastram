import React from 'react'
import Link from 'next/link'

import './CategoryHeader.css'

export default function CategoryHeader() {
  return (
    <>
        <div className="ctg-container">
            <div className="ctg-heading-wrapper">
                <div className="ctg-heading">
                    Menswear
                </div>
                <div className="ctg-route">
                    <Link className='ctg-route-link' href={"/"}>Home </Link>
                    <span> → </span>
                    <Link className='ctg-route-link' href={"/"}>Products </Link>
                    <span> → </span>
                    <Link className='ctg-route-link' href={"/"}>Tshirts </Link>
                </div>
            </div>
        </div>
    </>
  )
}
