"use client"
import React, {useState, useCallback, useEffect } from 'react'
import EmblaCarousel from '../../libs/EmblaCarousel/EmblaCarousel'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { homeFunctions } from '@/app/homeFunctions'


import './NewArrivals.css'


const OPTIONS: EmblaOptionsType = { loop: false, slidesToScroll: 'auto', containScroll: 'trimSnaps' }


export default function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const result = await homeFunctions.getNewArrivals();
          await setNewArrivals(result);
          console.log(newArrivals);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
    
  }, []);

  const SLIDE_COUNT = 12
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  
  return (
    <>
        <div className="na-container">

            <div className="na-header">
              <div className="na-heading">
                  New Arrivals
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

            <EmblaCarousel slides={SLIDES} options={OPTIONS} slideCard={'ProductCard'} emblaRef = {emblaRef} cardData={newArrivals} />


        </div>
      </>
  )
}
