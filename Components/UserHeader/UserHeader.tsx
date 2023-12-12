'use client'
import {useState, useEffect} from 'react'

import './UserHeader.css'

import SignOutBtn from '@/Components/SignOutBtn/SignOutBtn'
import { orderFunctions } from '@/app/(pages)/order/orderFunctions'
import {  useSession } from 'next-auth/react'

export default function UserHeader() {
  const {data: session} = useSession();
  const [orderHistory, setorderHistory] = useState([]);
  useEffect(() => {
    
    const dataJson = {userEmail : session?.user?.email}
    const response = orderFunctions.getOrderByEmail(dataJson);
    
    
  }, [])
  


  return (
    <>
        <div className="uh-container">
            <div className="uh-nav-wrapper">
                <div className="uh-nav">
                    <div className="uh-nav-left">
                        <div className='uh-nav-name'>
                            Hi, {session?.user?.name} 👋
                        </div>
                    </div>
                    <div className="uh-nav-right">
                        <SignOutBtn />   
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
