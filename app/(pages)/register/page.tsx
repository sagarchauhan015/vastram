import React from 'react'
import Link from 'next/link'
import './register.css'

export default function register() {
  return (
    <>
      <div className="rg-container">
            <div className='rg-bg-text'>Register</div>
            <div className="rg-box-wrapper">
              <div className="rg-box">
                <div className="rg-heading">Register</div>
                <div className="rg-input-box">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder='Ramlal' />
                </div>
                <div className="rg-input-box">
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder='Email address' />
                </div>
                <div className="rg-input-box">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder='Password (min. 8 characters)' />
                </div>
                <div className="rg-input-box">
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" placeholder='Same password' />
                </div>
                <div className="rg-btn">
                  <button className='ripple'>Register</button>
                </div>
                <div className="rg-redirect">
                  Already have an Account? <Link href="/login">Login</Link>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
