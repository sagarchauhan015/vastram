import React from 'react'
import Link from 'next/link'
import './login.css'

export default function Login() {
  return (
    <>
        <div className="lg-container">
            <div className='lg-bg-text'>Login</div>
            <div className="lg-box-wrapper">
              <div className="lg-box">
                <div className="lg-heading">Log In</div>
                <div className="lg-input-box">
                  <label htmlFor="email">Email</label>
                  <input type="text" placeholder='Email address' />
                </div>
                <div className="lg-input-box">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder='Password (min. 8 characters)' />
                </div>
                <div className="lg-forgot">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="lg-btn">
                  <button className='ripple'>Login</button>
                </div>
                <div className="lg-redirect">
                  Don't have an Account? <Link href="/register">Register</Link>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
