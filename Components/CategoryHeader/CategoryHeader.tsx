import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import carretIcon from 'public/Images/carret.svg'
import './CategoryHeader.css'
import { stringUtils } from '@/utils/stringUtils/stringUtils'

interface propTypes{
    category: any,
    subcategory: any
}

export default function CategoryHeader(props : propTypes) {
  return (
    <>
        <div className="ctg-container">
            <div className="ctg-heading-wrapper">
                <div className="ctg-heading">
                    {props.category}
                </div>
                <div className="ctg-route">
                    <Link className='ctg-route-link' href={"/"}>Home </Link>
                    <Image className='ctg-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                    <Link className='ctg-route-link' href={"/"}>{props.category}</Link>
                    {
                        !stringUtils.isUndefinedEmptyOrNull(props.subcategory) ?
                        <>
                            <Image className='ctg-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                            <Link className='ctg-route-link' href={"/"}>{props?.subcategory}</Link>
                        </>
                        :

                        <></>
                    }
                </div>
            </div>
        </div>
    </>
  )
}
