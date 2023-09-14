"use client"
import React, { Component } from 'react'
import Navbar from '@/Components/Navbar/Navbar'

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
      </>
    )
  }
}
