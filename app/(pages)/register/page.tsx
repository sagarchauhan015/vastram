import React from 'react'

import RegisterBox from '@/Components/RegisterBox/RegisterBox'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/libs/auth/authOptions';
import './register.css'

export default async function register() {
  
  const session =  await getServerSession(authOptions);

  if(session){
    redirect('/order')
  }
  return (
    <>
      <div className="rg-container">
            <div className='rg-bg-text'>Register</div>
            <div className="rg-box-wrapper">
              <RegisterBox />
            </div>
        </div>
    </>
  )
}
