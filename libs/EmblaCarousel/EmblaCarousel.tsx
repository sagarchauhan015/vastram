import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

import './EmblaCarousel.css'


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  slideCard : React.ReactNode
  emblaRef: any
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props

  return (
    <div className="embla">
      <div className="embla__viewport" ref={props.emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla-products">
                {props.slideCard}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
