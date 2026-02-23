import React from 'react'
import LoginBox from '@/Components/LoginBox/LoginBox'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/libs/auth/authOptions';

import './login.css'

export default async function Login() {
  const session =  await getServerSession(authOptions);

  if(session){
    redirect('/order')
  }

  return (
    <>
        <div className="lg-container">
            <div className='lg-bg-text'>Login</div>
            <div className="lg-box-wrapper">
              <LoginBox />
            </div>
        </div>
    </>
  )
}
