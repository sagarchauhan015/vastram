import React, { Component } from 'react'
import Image from 'next/image'
import searchIcon from '/public/Images/searchicon.svg'
import wishIcon from '/public/Images/wishlisticon.svg'
import cartIcon from '/public/Images/carticon.svg'
import hamburger from '/public/Images/hamburger.svg'
import profileIcon from '/public/Images/profileicon.svg'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <>
       <section className="nav-section">
            <div className="nav-container">

                <div className="nav-left">

                    <div className="nav-hamburger">
                        <Image src={hamburger} alt='searchicon' width={20} height={20}></Image>
                    </div>
                    <div className="nav-logo">
                        VASTRAM.
                    </div>

                    <div className="nav-links">
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
}
