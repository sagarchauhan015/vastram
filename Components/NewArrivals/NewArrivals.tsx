import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './NewArrivals.css'

export default class NewArrivals extends Component {
  render() {
    return (
      <>
        <div className="na-container">
            <div className="na-heading">
                New Arrivals
            </div>
            <div className="na-card-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
      </>
    )
  }
}
