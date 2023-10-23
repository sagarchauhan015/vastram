'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/navigation'
import DropDownMenu from '@/libs/MUI/DropDownMenu/DropDownMenu'
import searchIcon from '/public/Images/searchicon.svg'
import wishIcon from '/public/Images/wishlisticon.svg'
import cartIcon from '/public/Images/carticon.svg'
import hamburger from '/public/Images/hamburger.svg'
import profileIcon from '/public/Images/profileicon.svg'
import { categoryFunctions } from '@/app/(pages)/[category]/categoryFunctions'
import useCardsArray from '@/store/store'

import './Navbar.css'


export default function Navbar(props : any) {

    const router = useRouter();
    const updateCardsArray = useCardsArray((state) => state.updateCards);

    async function getProductByCategory(category: string){
        router.push(`/${category}?category=${category}`)
          let data = {
            category: category
          }
          const result = await categoryFunctions.getProductByCategory(data);
          await updateCardsArray(result);
      }
    
      async function getProductBySubCategory(e: Event, subCategory: string){
        router.push(`/${props.category}?category=${props.category}&subcategory=${subCategory}`)
        let data = {
          category: props.searchParams.category,
          subcategory: props.searchParams.subcategory
        }
        const result = await categoryFunctions.getProductBySubCategory(data);
        // await setCardsArray(result);
      }
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
                            <div onClick={()=> getProductByCategory('men')}>
                                <div className="nav-link">
                                    MEN
                                </div>
                            </div>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu getProductBySubCategory={props.getProductBySubCategory} category={'men'} menuItemList={['Shirts', 'T-shirts', 'Jeans', 'Trouser', 'Joggers']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <div onClick={(e)=> router.push("/women?category=women")}>
                                <div className="nav-link">
                                    WOMEN
                                </div>
                            </div>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu getProductBySubCategory={props.getProductBySubCategory} category={'women'} menuItemList={['Suits', 'Tops', 'Jeans', 'Shrugs', 'Skirts']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <Link href="/kids?category=kids">
                                <div className="nav-link">
                                    KIDS
                                </div>
                            </Link>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu getProductBySubCategory={props.getProductBySubCategory} category={'kids'} menuItemList={['Shorts', 'Jeans', 'T-shirts', 'Capris']} />
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
