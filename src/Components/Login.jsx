import React from 'react'
import CoverImage from '../assets/Registration/ttci.png'
import "./signup.css"

const Login = () => {
  return (
    <>
     <div className="main-Container">
        <div className="cover-image container12">
            <img src={CoverImage} alt="" />
        </div>
        <div className="signup container12">
            <h1 className='Heading-sign-up'>Log in to Your Account</h1>
            <p>Please enter your details</p>

            <form className='signup-form' action="" >
                <div className="username">  
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Username' />
                </div>

                <div className="email">
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete='off' placeholder='Enter your email' /> 
                </div>

                <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter your password' />

                </div>        

                <div className="btn">
            <button type='submit'>Log In</button>

            </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login