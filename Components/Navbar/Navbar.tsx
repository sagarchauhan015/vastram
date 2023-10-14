'use client'
import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DropDownMenu from '@/libs/MUI/DropDownMenu/DropDownMenu'
import searchIcon from '/public/Images/searchicon.svg'
import wishIcon from '/public/Images/wishlisticon.svg'
import cartIcon from '/public/Images/carticon.svg'
import hamburger from '/public/Images/hamburger.svg'
import profileIcon from '/public/Images/profileicon.svg'
import './Navbar.css'


export default function Navbar(props : any) {
  return (
    <>
       <section className="nav-section">
            <div className="nav-container">

                <div className="nav-left">

                    <div className="nav-hamburger">
                        <Image src={hamburger} alt='searchicon' width={20} height={20}></Image>
                    </div>
                    <Link href={"/"}>
                        <div className="nav-logo">
                            VASTRAM.
                        </div>
                    </Link>

                    <div className="nav-links">
                        <div className="nav-link-wrapper">
                            <Link href="/men?category=men" onClick={(e)=>props.getProductByCategory(e, props.category)}>
                                <div className="nav-link">
                                    MEN
                                </div>
                            </Link>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu category={'men'} menuItemList={['Shirts', 'T-shirts', 'Jeans', 'Trouser', 'Joggers']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <Link href="/women?category=women" onClick={(e)=>props.getProductByCategory(e, props.category)}>
                                <div className="nav-link">
                                    WOMEN
                                </div>
                            </Link>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu category={'women'} menuItemList={['Suits', 'Tops', 'Jeans', 'Shrugs', 'Skirts']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <Link href="/kids?category=kids">
                                <div className="nav-link">
                                    KIDS
                                </div>
                            </Link>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu category={'kids'} menuItemList={['Shorts', 'Jeans', 'T-shirts', 'Capris']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <Link href="/#blog-section">
                                <div className="nav-link">
                                    BLOGS
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="nav-right">
                    <div className="nav-search">
                        <Image src={searchIcon} alt='searchicon' width={15} height={15}></Image>
                        <input type="text" name="" id="" placeholder='Search Products' />
                    </div>
                    <div className="nav-profile">
                        <Image src={profileIcon} alt='searchicon' width={22} height={22}></Image>
                    </div>
                    <div className="nav-wishlist" title='Wishlist'>
                        <Image src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                    </div>
                    <div className="nav-cart" title='Cart'>
                        <Image src={cartIcon} alt='searchicon' width={22} height={22}></Image>
                    </div>

                </div>
            
            </div>

            <div className="hamburger-menu">
                <div className="mob-nav-links ">
                    <div className="nav-link-wrapper">
                        <div className="nav-link">
                            MEN
                        </div>
                    </div>
                    <div className="nav-link-wrapper">
                        <div className="nav-link">
                            WOMEN
                        </div>
                    </div>
                    <div className="nav-link-wrapper">
                        <div className="nav-link">
                            KIDS
                        </div>
                    </div>
                    <div className="nav-link-wrapper">
                        <div className="nav-link">
                            BLOGS
                        </div>
                    </div>
                </div>
            </div>
       </section>
      </>
  )
}
