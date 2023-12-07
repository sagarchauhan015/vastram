'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import wishIcon from '/public/Images/wishlisticon.svg'
import crossIcon from '/public/Images/crossIcon.svg'
import plusIcon from '/public/Images/plusicon.svg'
import minusIcon from '/public/Images/minusicon.svg'
import noCartIcon from '/public/Images/nocartitem.svg'

import './CartDetails.css'
import '../ProductDetails/ProductDetails.css'
import { cartFunctions } from '@/app/(pages)/cart/cartFunction'
import { useCartArray } from '@/store/store'

export default function CartDetails() {
  const router = useRouter();
  const cartArray = useCartArray((state)=> state.cart)
  const cartPrice = useCartArray((state)=>state.price)
  const addQuantity = useCartArray((state)=> state.addQuantity)
  const removeQuantity = useCartArray((state)=> state.removeQuantity)
  const removeProductItem = useCartArray((state)=> state.removeProductItem)


  const totaPayable =  cartPrice > 1000 ? cartPrice + Math.ceil((12*cartPrice)/100) - 99 : cartPrice + Math.ceil((5*cartPrice))/100;

  async function handleCheckout(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
      e.preventDefault();
        
      let data = {
          cartPrice: totaPayable,
          headers: {
              "Content-Type": 'application/json'
          }
      }

      const response = await cartFunctions.proceedToCheckout(data);
      router.push(response);
  }


  return (
    <>
        <div className="ct-container">
            <div className="ct-container-wrapper">
              <div className="ct-container-left">
                  <div className="ct-container-heading">Your shopping cart</div>
                  <div className="ct-cart-items">
                    {
                      cartArray?.length > 0 ?
                      
                      cartArray?.map((cartItem) => {
                        return(
                          <>
                             <div key={cartItem.productItem.Id} className="ct-cart-item">
                                <div className="ct-cart-item-left">
                                  <Image className='ct-image' src={cartItem.productItem.imgUrl ?? "https://ik.imagekit.io/jkmgqwabx/vastram/women/shrug1.webp?updatedAt=1696185983533"} width={1000} height={1000} alt='carret'></Image>
                                  <div className="ct-item-details">
                                    <div>
                                      <div className="ct-item-name">{cartItem.productItem.productName}</div>
                                      <div className="ct-item-des">{cartItem.productItem.description}</div>
                                    </div>
                                    <div className='ct-item-size-quantity'>
                                      <div className="ct-item-size">Size: <div className='ct-item-size-selected'>{cartItem.productSize}</div></div>
                                      <div className="ct-item-quantity">
                                        Qty: 
                                        <span className='ct-quantity-icon' onClick={()=>removeQuantity(cartItem)}><Image className='ct-quant-img' src={minusIcon} alt='searchicon' width={22} height={22}></Image></span>
                                        <span className='ct-quantity-num'>{cartItem.productQuantity}</span>
                                        <span className='ct-quantity-icon' onClick={()=>addQuantity(cartItem)}><Image className='ct-quant-img' src={plusIcon} alt='searchicon' width={22} height={22}></Image></span>
                                      </div>
                                    </div>

                                    <div>
                                      <div className="ct-item-code">CODE: VTM{cartItem.productItem.Id.slice(0, 5)}{cartItem.productSize}</div>
                                      <div className="ct-item-ship">Estimate Shipping Date : 7 Dec 2023</div>
                                    </div>

                                  </div>
                                </div>
                                <div className="ct-cart-item-right">
                                  <div className="ct-item-price">₹ {cartItem.productItem.price}</div>
                                  <div className="ct-item-action">
                                  <div className="pc-wishlist">
                                      <Image className='pc-wishlist-img' src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                                  </div>
                                  <div className="pc-wishlist" onClick={()=>removeProductItem(cartItem)}>
                                      <Image className='ct-cross-img' src={crossIcon} alt='searchicon' width={22} height={22}></Image>
                                  </div>
                                  </div>
                                </div>
                              </div>
                          </>
                        )
                      })
                      :
                      <>
                        <div className='ct-empty'>
                          <div><Image className='' src={noCartIcon} alt='searchicon' width={122} height={122}></Image></div>
                          <div className='ct-empty-txt' >Hey! Your cart is looking empty</div>
                          <div>we have some beautiful items for you</div>
                          <Link className='ct-empty-shopping-txt' href={'/'}>Go to shopping</Link>
                        </div>
                      </>
                      
                    }

                  </div>
              </div>
              <div className="ct-container-right">
                  <div className="ct-container-heading">Cart summary</div>
                  <div className='ct-bill-summary'>
                    <div className="ct-bill">
                      <div className="ct-bill-item">
                        <div className="ct-bill-name">Cart Total</div>
                        <div className="ct-bill-value">₹ {cartPrice }</div>
                      </div>
                      <div className="ct-bill-item">
                        <div className="ct-bill-name">Total Discount</div>
                        <div className="ct-bill-value">- ₹ {cartPrice > 1000 ? 99 : 0}</div>
                      </div>
                      <div className="ct-bill-item">
                        <div className="ct-bill-name">Taxes <span className='ct-bill-tax'>(incl. SGST & CGST)</span></div>
                        <div className="ct-bill-value">₹&nbsp; 
                          {
                            cartPrice > 1000 ?
                            <>
                            {
                              Math.ceil((12*cartPrice)/100)
                            }
                            </>
                            :
                            <>
                            {
                              Math.ceil((5*cartPrice)/100)
                            }
                            </>
                          }
                        </div>
                      </div>
                      <div className="ct-bill-info">Shipping charge to be taken on checkout</div>
                    </div>
                  </div>
                  <div className="ct-promo-heading">Promo Code</div>
                  <div className="ct-promo-input">
                    <input className='ct-promo-cmn' type="text" name="" id="" placeholder='Have a promocode'/>
                    <div className="ct-promo-cmn ct-promo-btn">Apply</div>
                  </div>
                  <div className="ct-payable">
                    <div className="ct-payable-heading">Total Payable</div>
                    <div className="ct-payable-amount">₹ {totaPayable}</div>
                  </div>
                  <div className="pd-line"></div>
                  <div className="ct-action-btn">
                        <div onClick={(e) => handleCheckout(e)} className="ct-action-cmn ct-action-checkout">Proceed to checkout</div>
                        <Link className='' href={'/cart'}><div className="ct-action-cmn ct-action-shopping">Continue Shopping</div></Link>
                    </div>

              </div>
            </div>
        </div>
    </>
  )
}
