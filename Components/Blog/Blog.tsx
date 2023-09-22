"use client"
import React, {useCallback} from 'react'
import EmblaCarousel from '../../libs/EmblaCarousel/EmblaCarousel'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import BlogCard from '../BlogCard/BlogCard'

import './Blog.css'


const OPTIONS: EmblaOptionsType = { loop: false, slidesToScroll: 'auto', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Blog() {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
  
    const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])
  
  return (
    <>
        <div id='blog-section' className="blg-container">

            <div className="blg-header">
            <div className="blg-heading">
                Blogs
            </div>
            <div className="carousel-btn">
                <div className="carousel-left" onClick={scrollPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z"/></svg>
                </div>
                <div className="carousel-right" onClick={scrollNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><g transform="translate(256 0) scale(-1 1)"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z"/></g></svg>
                </div>
            </div>
            </div>

            <EmblaCarousel slides={SLIDES} options={OPTIONS} slideCard={<BlogCard/>} emblaRef = {emblaRef} />


        </div>
    </>
  )
}
