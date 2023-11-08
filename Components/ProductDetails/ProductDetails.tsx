import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import wishIcon from '/public/Images/wishlisticon.svg'
import infoIcon from '/public/Images/Infoicon.svg'


import carretIcon from 'public/Images/carret_black.svg'


import './ProductDetails.css'

export default function ProductDetails() {
  return (
    <>
        <div className="pd-container">
            <div className="pd-breadcrums">
                <div className="pd-route">
                    <Link className='pd-route-link' href={"/"}>Home </Link>
                    <Image className='pd-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                    <Link className='pd-route-link' href={"/"}>Men </Link>
                    <Image className='pd-carret-icon' src={carretIcon} width={1000} alt='carret'></Image>
                    <Link className='pd-route-link' href={"/"}>T-shirts </Link>
                </div>
            </div>
            <div className="pd-container-wrapper">
                <div className="pd-container-left">
                    <div className="pd-img-detail">
                        <div className="pd-img">
                            <Image className='pd-product-image' src="https://ik.imagekit.io/jkmgqwabx/vastram/men/greyShirt.webp?updatedAt=1696135970020" width={1000} height={1000} alt='carret'></Image>
                        </div>
                    </div>
                </div>
                <div className="pd-container-right">
                    <div className="pd-detail">
                        <div className="pd-heading">
                            <p className='pd-heading-para'>KUDRAT COTURE</p>
                            <div className="pc-wishlist">
                                <Image className='pc-wishlist-img' src={wishIcon} alt='searchicon' width={22} height={22}></Image>
                            </div>
                        </div>
                        <div className="pd-subheading">
                            Purple Silk Thread Embroidered Kurta Set
                        </div>
                        <div className="pd-price">
                            <p>₹ 1899</p>
                            <p>inclusive of all taxes</p>
                        </div>
                        <div className="pd-line"></div>
                        <div className="pd-size">
                            <div className="pd-size-heading">
                                <p>Select your size</p>
                                <div className="pd-size-icon">
                                    <Image className='infoicon-img' src={infoIcon} alt='searchicon' width={100} height={100}></Image>
                                    <div className="pd-size-chart">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Chest (inches)</th>
                                                <th>Length (inches)</th>
                                                <th>Sleeve Length (inches)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>XS</td>
                                                <td>32</td>
                                                <td>26</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <td>S</td>
                                                <td>36</td>
                                                <td>28</td>
                                                <td>7.5</td>
                                            </tr>
                                            <tr>
                                                <td>M</td>
                                                <td>40</td>
                                                <td>29</td>
                                                <td>8</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>44</td>
                                                <td>30</td>
                                                <td>8.5</td>
                                            </tr>
                                            <tr>
                                                <td>XL</td>
                                                <td>48</td>
                                                <td>31</td>
                                                <td>9</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-size-selection">
                                <div className="pd-size-name">
                                    XL
                                </div>
                                <div className="pd-size-name">
                                    L
                                </div>
                                <div className="pd-size-name">
                                    XL
                                </div>
                                <div className="pd-size-name">
                                    L
                                </div>
                            </div>

                        </div>

                        <div className="pd-action-btn">
                            <div className="pd-bnow pd-action-cmn">Buy Now</div>
                            <div className="pd-add-cart pd-action-cmn">Add to cart</div>
                        </div>
                        <div className="pd-line"></div>

                        <div className="pd-info">
                            <div className="pd-info-heading">
                                Product Description
                            </div>
                            <div className="pd-info-content">
                                Featuring a mustard kurta in jacquard chanderi and cotton silk base with zari and boota embroidery. It is paired with ivory pants. Perfect wear for a festive occasion or pooja ceremony.
                            </div>
                        </div>

                        <div className="pd-line"></div>

                        <div className="pd-info pd-info-price-match">
                            <div className="pd-info-heading">
                                Price match promise
                            </div>
                            <div className="pd-info-content">
                                If you find the product for less we'll match it!
                                <div className="pd-info-link">Know More</div>
                                <div className="pd-price-match-terms">
                                    <h2>Price Match Promise - Terms and Conditions</h2>
                                    <p>At Vastram, we are committed to providing our customers with the best prices. Our Price Match Promise ensures that you get the best deal possible when you shop with us. Please read the following terms and conditions carefully:</p>
                                    
                                    <ol>
                                        <li>We will match the price of any identical product that is currently available for purchase at a lower price from a competitor.</li>
                                        <li>The product must be in stock and available for immediate purchase from the competitor.</li>
                                        <li>The price match request must be made at the time of purchase. We will not retroactively match prices.</li>
                                        <li>Price matches are limited to one item per customer.</li>
                                        <li>Price matches do not apply to clearance, closeout, or liquidation sales.</li>
                                        <li>Price matches do not apply to online marketplaces, auction sites, or membership clubs.</li>
                                        <li>Price matches will only be honored within a specified time frame, typically 7 days from the date of purchase.</li>
                                        <li>We reserve the right to verify the competitor's price and availability before matching it.</li>
                                        <li>Our Price Match Promise is subject to change without notice.</li>
                                    </ol>
                                    
                                    <p>If you believe you have found a product that qualifies for a price match, please contact our customer service team or visit one of our stores for assistance. We are dedicated to providing you with the best prices and ensuring your satisfaction with your purchase.</p>
                                    
                                    <p>By making a purchase and requesting a price match, you agree to abide by these terms and conditions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pd-line"></div>
                        
                        <div className="pd-info">
                            <div className="pd-info-heading">
                                Shiping Information
                            </div>
                            <div className="pd-info-content">
                            The estimated shipping date for this product is by 4th of December. Please note that this is the shipping date and not the delivery date.
                            </div>
                        </div>

                        <div className="pd-line"></div>

                        <div className="pd-info-cols">
                            <div className="pd-info">
                                <div className="pd-info-heading">
                                    Composition
                                </div>
                                <div className="pd-info-content">
                                    Spun Polyester
                                </div>
                            </div>
                            <div className="pd-info">
                                <div className="pd-info-heading">
                                    Fit
                                </div>
                                <div className="pd-info-content">
                                    True to size
                                </div>
                            </div>
                            <div className="pd-info">
                                <div className="pd-info-heading">
                                    Care
                                </div>
                                <div className="pd-info-content">
                                    Dry clean only
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
