"use client"
import React, { Component } from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Categories from '@/Components/Categories/Categories'
import Footer from '@/Components/Footer/Footer'
import ProductCard from '@/Components/ProductCard/ProductCard'
import BlogCard from '@/Components/BlogCard/BlogCard'

interface props{

}
interface state{
  isNavMenuOpen: boolean
}

export default class Home extends Component<props, state>{
  constructor(props: any){
    super(props);
  }
  render() {
    return (
      <>
        <Navbar />
        {/* <BlogCard /> */}
        {/* <ProductCard /> */}
        <Categories />
        <Footer />
      </>
    )
  }
}
