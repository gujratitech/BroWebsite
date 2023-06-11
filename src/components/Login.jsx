import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className="header-sec">
        <h1>Sign In</h1>
        <p>
          Sign in with us...
        </p>
      </div>
      <form action="">
        <div className="container">
            <div className="main_form">

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" />
                
            </div>
        </div>

        <p className='already-account'>Don't have an account?<NavLink to={"/signup"}>Register here</NavLink></p>
      </form>
      
    
    </>
  )
}

export default Login
