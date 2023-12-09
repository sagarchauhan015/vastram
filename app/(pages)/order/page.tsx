'use client'

import SignOutBtn from '@/Components/SignOutBtn/SignOutBtn'
import {  useSession } from 'next-auth/react'

export default function page() {
  const {data: session} = useSession();
  return (
      <>
        <div style={{marginTop: '5rem'}}>
          Your payment is sucessfull, you can track your order here.
        </div>
        <div>
          Name: {session?.user?.name}
        </div>
        <div>
          Email: {session?.user?.email}
        </div>
        <SignOutBtn />
      </>
  )
}
