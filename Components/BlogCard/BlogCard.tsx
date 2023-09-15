import React, { Component } from 'react'
import Image from 'next/image'
import blogImg from '/public/Images/blogimg.gif'
import './BlogCard.css'

export default class BlogCard extends Component {
  render() {
    return (
      <>
        <div className="bc-container">
            <div className="bc-blog-img">
                <Image className='bc-image' src={blogImg} alt='product-image' width={300} height={250}></Image>
            </div>
            <div className="bc-blog-heading">
                Fashion You Don't Know: A dream fashion
            </div>
            <div className="bc-blog-des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam dolores sunt ducimus doloribus nisi eveniet consectetur minima magni? Odit animi distinctio temporibus
            </div>
            <div className="bc-blog-action">
                <a href="#">Read More</a>
            </div>
        </div>
      </>
    )
  }
}
