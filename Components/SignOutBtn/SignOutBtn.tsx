'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

import './SignOutBtn.css'

export default function SignOutBtn() {
  return (
    <>
        <button className='ripple so-btn' onClick={()=> signOut()}>Sign Out</button>
    </>
  )
}
