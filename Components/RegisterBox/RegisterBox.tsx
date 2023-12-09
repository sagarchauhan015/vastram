'use client'
import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { registerFunctions } from '@/app/(pages)/register/registerFunctions'
import './RegisterBox.css'

export default function RegisterBox() {
  const [registerDetails, setregisterDetails] = useState<registerInterface>({} as registerInterface)
  const [showError, setshowError] = useState<string>('')


  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();

    let name: string = e.target.name;
    let value: string = e.target.value;

    setregisterDetails({
      ...registerDetails,
      [name] : value
    })
    console.log(registerDetails);
  }

  async function handleSubmit(){
    if(!registerDetails.name || !registerDetails.email || !registerDetails.password || !registerDetails.confirmPassword){
      setshowError('All fields are required*')
      return;
    }
    if(registerDetails.confirmPassword !== registerDetails.password){
      setshowError(`Password doesn't match`)
      return;
    }
    if(registerDetails.name && registerDetails.email && registerDetails.password && registerDetails.confirmPassword){
      setshowError('')
      const response = await registerFunctions.registerUser(registerDetails);
      if(!response.isSuccess){
        await setshowError(response.data);
      }
    }
  }

  return (
    <>
        <div className="rg-box">
            <div className="rg-heading">Register</div>
            <div className="rg-input-box">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Ramlal' name='name' onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="rg-input-box">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email address' name='email' onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="rg-input-box">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Password (min. 8 characters)' name='password' onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="rg-input-box">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" placeholder='Same password' name='confirmPassword' onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className='rg-error-msg'>{showError}</div>
            <div className="rg-btn">
                <button className='ripple' onClick={handleSubmit}>Register</button>
            </div>
            <div className="rg-redirect">
                Already have an Account? <Link href="/login">Login</Link>
            </div>
            </div>
    </>
  )
}
