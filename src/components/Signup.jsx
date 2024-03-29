import React from 'react'
import Navbar from './Navbar'
// import Header from './Header'
import '../css/signup.css'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <Navbar/>
      <div className="header-sec">
        <h1>Sign Up</h1>
        <p>
          Register with us...
        </p>
      </div>
      <form action="">
        <div className="container">
            <div className="main_form">
                <label htmlFor="">Name</label>
                <input type="text" />

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" />
                
                <label htmlFor="">Phone</label>
                <input type="number" name="number" id="number" />
            </div>
        </div>

        <p className='already-account'>Already have an account?<NavLink to={"/login"}>Sign in here</NavLink></p>
      </form>
      <Footer/>
    </>
  )
}

export default Signup
