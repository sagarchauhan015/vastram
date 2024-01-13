'use client'
import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



import './LoginBox.css'
import { loginFunctions } from '@/app/(pages)/login/loginFunctions'

export default function LoginBox() {

  const router = useRouter();
  const [loginDetails, setloginDetails] = useState<loginInterface>({} as loginInterface);
  const [showError, setshowError] = useState<string>('')
  
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();

    let name: string = e.target.name;
    let value: string = e.target.value;

    setloginDetails({
      ...loginDetails,
      [name] : value
    })
    console.log(loginDetails);
  }

  async function handleSubmit(){
    if(!loginDetails.email || !loginDetails.password){
      setshowError('All fields are required*')
      return;
    }
    if(loginDetails.email && loginDetails.password){
      setshowError('')
      const response = await loginFunctions.loginUser(loginDetails);

      if(response?.error){
        await setshowError('Invalid Credentials');
        return;
      }

      router.replace('/order')
    }
  }

  return (
   <>
        <div className="lg-box">
                <div className="lg-heading">Log In</div>
                <div className="lg-error">{showError}</div>
                <div className="lg-input-box">
                  <label htmlFor="email">Email</label>
                  <input type="text" placeholder='Email address' name='email' onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="lg-input-box">
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder='Password (min. 8 characters)' name='password' onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="lg-forgot">
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="lg-btn">
                  <button className='ripple' onClick={handleSubmit}>Login</button>
                </div>
                <div className="lg-redirect">
                  Don't have an Account? <Link href="/register">Register</Link>
                </div>
              </div>
   </>
  )
}
