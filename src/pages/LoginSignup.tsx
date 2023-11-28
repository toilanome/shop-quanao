import React from 'react'
import './CSS/Login.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">Already have an account? <span>Login</span></div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, tempora ad! Iure .</p>
        </div>
      </div>
    </div>
  )
}
