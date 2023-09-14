"use client"
import React, { Component } from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import Categories from '@/Components/Categories/Categories'
import Footer from '@/Components/Footer/Footer'

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
        <Categories />
        <Footer />
      </>
    )
  }
}
