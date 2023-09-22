import React from 'react'
import Image from 'next/image'

import './AboveTheFold.css'
import atfImg from '/public/Images/atfImage.png'


export default function AboveTheFold() {
  return (
   <>
        <div className="atf-container">
            <div className="atf-wrapper">
                <div className="video-text">
                    <video autoPlay muted loop>
                        <source src="/Videos/pexelVideo.mp4" type='video/mp4' />
                    </video>
                    <div className="video-text-box">
                        <p>Fashion <br /> Never <br /> Ends</p>
                    </div>
                </div>
                <div className="atf-img">
                    <Image src={atfImg} alt='image' width={600} ></Image>
                </div>
            </div>
            <div className="atf-scroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/></svg>
            <p className='atf-scroll-text'>scroll down</p>
            </div>
        </div>
   </>
  )
}
