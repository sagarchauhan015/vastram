import React from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import ProductCard from '@/Components/ProductCard/ProductCard'
import BlogCard from '@/Components/BlogCard/BlogCard'
import { stringUtils } from '@/utils/stringUtils/stringUtils'


import './EmblaCarousel.css'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  slideCard : React.ReactNode
  emblaRef: any
  cardData: any
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  console.log(props.cardData)
  return (
    <div className="embla">
      <div className="embla__viewport" ref={props.emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla-products">
                {!stringUtils.isUndefinedEmptyOrNull(props.cardData) ?
                  props.slideCard === 'ProductCard' ? <ProductCard cardDetail={props.cardData[index]} /> : ""
                  :
                  <></>  
                }
                {!stringUtils.isUndefinedEmptyOrNull(props.cardData) ?
                  props.slideCard === 'BlogCard' ? <BlogCard /> : ""
                  :
                  props.slideCard === 'BlogCard' ? <BlogCard /> : ""
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
