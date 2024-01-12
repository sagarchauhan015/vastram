'use client'
import {useState, useEffect} from 'react'

import './UserHeader.css'

import { signOut } from 'next-auth/react'

import { orderFunctions } from '@/app/(pages)/order/orderFunctions'
import {  useSession } from 'next-auth/react'
import Image from 'next/image'
import cartIcon from '/public/Images/carticon.svg'
import appIcon from '/public/Images/overviewicon.svg'
import logOutIcon from '/public/Images/logouticon.svg'
import { stringUtils } from '@/utils/stringUtils/stringUtils'


export default function UserHeader() {
  const {data: session} = useSession();
  const [orderHistory, setorderHistory] = useState<[orderInterface]>();

  useEffect(() => {
    async function init() {
        const dataJson = {userEmail : session?.user?.email}
        const response = await orderFunctions.getOrderByEmail(dataJson);
        setorderHistory(response);
    }
    init();
  }, [])
  


  return (
    <>
        <div className="uh-container">
            <div className="uh-wrapper">

                <div className="uh-sidebar">
                    <div className="uh-profile">
                        <div className="uh-profile-img">
                            {
                                false ?
                                <>
                                </>
                                :
                                <>
                                    <div className="uh-profile-txt">{session?.user?.name !== null && session?.user?.name !== undefined ?  session?.user?.name[0] : 'U'}</div>
                                </>
                            }
                        </div>
                        <div className="uh-profile-name">
                            Hi, {session?.user?.name} 👋
                        </div>
                    </div>
                    <div className="uh-nav-menu">
                        <div className="uh-nav-item">
                        <Image className='ct-quant-img' src={appIcon} alt='searchicon' width={22} height={22}></Image>
                        <p className='uh-nav-item-txt'>Dashboard</p>
                        </div>
                        <div className="uh-nav-item">
                        <Image className='ct-quant-img' src={cartIcon} alt='searchicon' width={22} height={22}></Image>
                        <p className='uh-nav-item-txt'>Order History</p>
                        </div>
                        <div className="uh-nav-item" onClick={()=> signOut()}>
                        <Image className='ct-quant-img' src={logOutIcon} alt='searchicon' width={22} height={22}></Image>
                        <p className='uh-nav-item-txt'>Logout</p>
                        </div>
                    </div>
                </div>

                <div className="uh-orders">
                    <div className="uh-order-section">Order Details</div>
                    <div className="uh-order-details">
                        <div className="uh-order-headers">
                            <div className="uh-order-heading">Order ID</div>
                            <div className="uh-order-heading">Payment Status</div>
                            <div className="uh-order-heading">Order Status</div>
                            <div className="uh-order-heading">Address</div>
                            <div className="uh-order-heading">Delivery date</div>
                            <div className="uh-order-heading">Order Amount</div>

                        </div>
                        {   
                            stringUtils.isUndefinedEmptyOrNull(orderHistory) ? 
                                <div>No order to show</div>
                            :

                            Array.isArray(orderHistory) &&  orderHistory?.map(order => (
                                <>
                                    <div className="uh-order-item">
                                        <div className="uh-order-data uh-order-id">VSM{order.Id.slice(0, 8)}</div>
                                        <div className="uh-order-data">{order?.paymentStatus}</div>
                                        <div className={{'Pending':"uh-order-data uh-order-pending", 'Delivered' : "uh-order-data uh-order-delivered", 'Cancelled' : "uh-order-data uh-order-cancelled"}[order.orderStatus]}>{order.orderStatus}</div>
                                        <div className="uh-order-data">{order.shippingAddress}</div>
                                        <div className="uh-order-data">{order.createdAt.toString().split('T')[0]}</div>
                                        <div className="uh-order-data">{order.orderAmount}</div>
                                    </div>
                                </>
                            ))
                        }

                        {/* <div className="uh-order-item">
                            <div className="uh-order-data uh-order-id">VSM435gfs3</div>
                            <div className="uh-order-data">Completed</div>
                            <div className={{'pending':"uh-order-data uh-order-pending", 'delivered' : "uh-order-data uh-order-delivered", 'cancelled' : "uh-order-data uh-order-cancelled"}['pending']}>Pending</div>
                            <div className="uh-order-data">Greater Noida</div>
                            <div className="uh-order-data">23-03-2023</div>
                        </div>
                        <div className="uh-order-item">
                            <div className="uh-order-data uh-order-id">VSM43ssges3</div>
                            <div className="uh-order-data">Completed</div>
                            <div className={{'pending':"uh-order-data uh-order-pending", 'delivered' : "uh-order-data uh-order-delivered", 'cancelled' : "uh-order-data uh-order-cancelled"}['delivered']}>Delivered</div>
                            <div className="uh-order-data">Greater Noida</div>
                            <div className="uh-order-data">23-03-2023</div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
