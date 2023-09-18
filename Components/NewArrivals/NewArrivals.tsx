import React, { Component } from 'react'
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProductCard from '../ProductCard/ProductCard'
import './NewArrivals.css'

interface props{
  
}
interface state{

}

export default class NewArrivals extends Component<props, state> {
  ref :React.RefObject<any>

  constructor(props:any){
    super(props);
    this.ref = React.createRef();

  }

  componentDidMount() {
    if ( this.ref.current ) {
      console.log( this.ref.current.splide.length );
    }
  }


  
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

        <Splide hasTrack={ false }>
          <SplideTrack>
            <SplideSlide>
              <div className="na-card-container">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="na-card-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </SplideSlide>
            <SplideSlide>
              <div className="na-card-container">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>


      </>
    )
  }
}
