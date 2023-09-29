"use client"
import React, {useState} from 'react'
import { FormControl, FormControlState } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import { adminFunctions } from './adminFunctions';

import './admin.css'

const StyledInput = styled(Input)(
    ({ theme }) => `
    display: inline-block;
  
    .${inputClasses.input} {
      width: 320px;
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
      border-radius: 8px;
      padding: 12px 12px;
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
        border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
      }
    }
  
    &.filled .${inputClasses.input} {
      box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
    }
  `,
  );
  
  const OkMark = styled('span')`
    margin-left: 8px;
    margin-top: 10px;
    position: absolute;
    color: rgb(125 200 0 / 1);
  `;
  
  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);


function uploadProduct(){
    let data = {
        "productName": "Blue Checked Shirt",
        "description": "Cotton blue colored shirt made with 10% elastane",
        "price": 1200,
        "imgUrl" : "http://blue/shirt.png",
        "category": "shirt"
      }
    const result = adminFunctions.uploadProduct(data);
}

export default function admin() {
    
    const [productDetails, setproductDetails] = useState();

  return (
    <>
        <div className="admin-container">
            <div className="admin-form">
                <div className='admin-form-heading'>Add Product Details</div>

                <form action="" className='admin-form-inputs' onSubmit={uploadProduct}>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Product Name</label>
                            <StyledInput className={filled ? 'filled' : ''} />
                            {filled && !focused && <OkMark>✔</OkMark>}
                            </React.Fragment>
                        )}
                    </FormControl>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Product Desc</label>
                            <StyledInput className={filled ? 'filled' : ''} />
                            {filled && !focused && <OkMark>✔</OkMark>}
                            </React.Fragment>
                        )}
                    </FormControl>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Product Price</label>
                            <StyledInput className={filled ? 'filled' : ''} />
                            {filled && !focused && <OkMark>✔</OkMark>}
                            </React.Fragment>
                        )}
                    </FormControl>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Product Category</label>
                            <StyledInput className={filled ? 'filled' : ''} />
                            {filled && !focused && <OkMark>✔</OkMark>}
                            </React.Fragment>
                        )}
                    </FormControl>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Product Sizes</label>
                            <input type="checkbox" name="" id="" /><span className='admin-size-check'>XS</span>
                            <input type="checkbox" name="" id="" /><span className='admin-size-check'>S</span>
                            <input type="checkbox" name="" id="" /><span className='admin-size-check'>M</span>
                            <input type="checkbox" name="" id="" /><span className='admin-size-check'>L</span>
                            <input type="checkbox" name="" id="" /><span className='admin-size-check'>XL</span>
                            </React.Fragment>
                        )}
                    </FormControl>
                    <FormControl defaultValue="" className='input-box-label' required>
                        {({ filled, focused }: FormControlState) => (
                            <React.Fragment>
                            <label className='admin-form-label'>Upload Image <p></p></label>
                            <input type="file" name="" id="" />
                            </React.Fragment>
                        )}
                    </FormControl>
                    <button type="submit">Upload Product</button>
                </form>


            </div>
        </div>
    </>
  )
}
