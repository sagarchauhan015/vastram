"use client"
import React, {useState} from 'react'
import { adminFunctions } from './adminFunctions';
import { stringUtils } from '@/utils/stringUtils/stringUtils';

import './admin.css'

interface productDetailsInterface{
  productName: string,
  description: string,
  productInfo: string,
  price: number,
  imgUrl: string,
  category: string,
  subCategory: string,
  size: Array<string>
}


export default function admin() {
    
  const [productDetails, setProductDetails] = useState<productDetailsInterface>({
    productName: "",
    description: "",
    productInfo: "",
    price: 0,
    imgUrl: "",
    category: "",
    subCategory: "",
    size: [],
  });

    async function handleInputChange(e : any) {
      let name : keyof productDetailsInterface = e.target.name;
      let value = e.target.value;
      if (name === "size") {
        await setProductDetails((prevState) => ({
          ...prevState,
          [name]: [...prevState.size, e.target.id],
        }));
      } else {
        await setProductDetails((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
      
    }

    async function uploadProduct(e:any){
      e.preventDefault();
      const result = await adminFunctions.uploadProduct(productDetails);
  
      if(result.isSuccess === true){
        alert('Product Uploaded Successfully !');
      }
    }

  return (
    <>
        <div className="admin-container">
            <div className="admin-form">
                <div className='admin-form-heading'>Add Product Details</div>

                <form action="" className='admin-form-inputs' onSubmit={uploadProduct}>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Product Name</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="productName" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Product Description</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="description" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Product Additional Info</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="productInfo" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Price</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="price" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Category</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="category" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Sub Category</label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="subCategory" id="" className='admin-input-box'/>
                  </div>
                  <div className="admin-input-field">
                      <label className='admin-form-label'>Product Sizes</label>
                      <input onChange={(e)=>{handleInputChange(e)}} type="checkbox" name="size" id="xs" /><span className='admin-size-check'>XS</span>
                      <input onChange={(e)=>{handleInputChange(e)}} type="checkbox" name="size" id="s" /><span className='admin-size-check'>S</span>
                      <input onChange={(e)=>{handleInputChange(e)}} type="checkbox" name="size" id="m" /><span className='admin-size-check'>M</span>
                      <input onChange={(e)=>{handleInputChange(e)}} type="checkbox" name="size" id="l" /><span className='admin-size-check'>L</span>
                      <input onChange={(e)=>{handleInputChange(e)}} type="checkbox" name="size" id="xl" /><span className='admin-size-check'>XL</span>
                  </div>
                  <div className="admin-input-field">
                    <label className='admin-form-label'>Upload Image Url<p></p></label>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" name="imgUrl" id="" className='admin-input-box'/>
                  </div>
                    <button type="submit">Upload Product</button>
                </form>
            </div>
        </div>
    </>
  )
}
