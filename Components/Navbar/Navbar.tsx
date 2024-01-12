'use client'
import React, {useState} from 'react'
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
import {useCardsArray} from '@/store/store'
import { useCartArray } from '@/store/store'


import './Navbar.css'
import { stringUtils } from '@/utils/stringUtils/stringUtils'


export default function Navbar(props : any) {

    const router = useRouter();
    const updateCardsArray = useCardsArray((state) => state.updateCards);
    const cartArray  = useCartArray((state)=> state.cart)

    const [searchQuery, setsearchQuery] = useState<string>('')
    const [searchResult, setsearchResult] = useState<[productInterface]>()

    async function getProductByCategory(e : React.MouseEvent<HTMLElement>, category: string){
        router.push(`/${category}?category=${category}`)
          let data = {
            category: category
          }
          const result = await categoryFunctions.getProductByCategory(data);
          await updateCardsArray(result);
      }
    
      async function getProductBySubCategory(e: Event, category: string, subCategory: string){
        router.push(`/${category}?category=${category}&subcategory=${subCategory}`)
        let data = {
          category: category,
          subcategory: subCategory
        }
        const result = await categoryFunctions.getProductBySubCategory(data);
        await updateCardsArray(result);

      }

      async function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
        console.log('value from direct event: ', e.target.value);
        await setsearchQuery(e.target.value);
        console.log('value after setting state: ', searchQuery);

        const result = await categoryFunctions.getProductBySearchInput(e.target.value);
        if(result.isSuccess){
            setsearchResult(result.data);
        }

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
                            <div onClick={(e)=> getProductByCategory(e,'men')}>
                                <div className="nav-link">
                                    MEN
                                </div>
                            </div>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu getProductBySubCategory={getProductBySubCategory} category={'men'} menuItemList={['Shirts', 'T-shirts', 'Jeans', 'Trousers', 'Joggers']} />
                            </div>
                        </div>
                        <div className="nav-link-wrapper">
                            <div onClick={(e)=> getProductByCategory(e,'women')}>
                                <div className="nav-link">
                                    WOMEN
                                </div>
                            </div>
                            <div className="nav-dropdown-menu">
                                <DropDownMenu getProductBySubCategory={getProductBySubCategory} category={'women'} menuItemList={['Suits', 'Tops', 'Jeans', 'Shrugs', 'Skirts']} />
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
                        <input type="text" name="" id="" onChange={(e) => handleSearchInput(e)} placeholder='Search Products' />
                        <div className="nav-search-menu">
                            {
                                !stringUtils.isUndefinedEmptyOrNull(searchResult) ?
                                    searchResult?.map(item => (
                                        <Link href={`/product?productId=${item.Id}`}>
                                            <div className="nav-search-menu-item">
                                                {item.productName}
                                            </div>
                                        </Link>
                                    ))
                                :
                                <>
                                    {/* <div>Can't find any product</div> */}
                                </>
                            }
                        </div>

                        {/* <div className="nav-search-menu">
                            <div className="nav-search-menu-item">
                                Grey Printed Shirt
                            </div>
                            <div className="nav-search-line"></div>
                            <div className="nav-search-menu-item">
                                Grey Printed Shirt
                            </div>
                            <div className="nav-search-line"></div>
                            <div className="nav-search-menu-item">
                                Grey Printed Shirt
                            </div>
                        </div> */}

                    </div>
                    <div className="nav-profile">
                        <Image src={profileIcon} className='nav-profile-icon' alt='searchicon' width={22} height={22}></Image>
                        <div className="nav-dd">
                            <div className="nav-dd-tip">
                            </div>
                                <Link href={'/login'}><div className="nav-list-item ripple">Login</div></Link>
                                <Link href={'/register'}><div className="nav-list-item ripple">Register</div></Link>

                        </div>
                    </div>
                    <div className="nav-wishlist" title='Wishlist'>
                        <Image src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                    </div>
                    <Link href={"/cart"}>
                        <div className="nav-cart" title='Cart'>
                            <Image src={cartIcon} alt='searchicon' width={22} height={22}></Image>
                            <div className="nav-cart-badge">{cartArray.length}</div>
                        </div>
                    </Link>

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
