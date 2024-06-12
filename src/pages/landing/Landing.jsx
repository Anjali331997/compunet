import React, { useState } from 'react'
import './Landing.css'
import { Link, Outlet } from 'react-router-dom'



const Landing = () => {

  const [showSignup, setShowSignup] = useState(true)

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div className='landing_div'>
      <div className="image_div">
        <img src='https://i.postimg.cc/3w2rYVRM/Untitled-design.pngg' alt="" />
      </div>
      <div className="signup_login">
        <Outlet />
        <Link to={showSignup ? `/login` :'/'}>
          <button onClick={toggleForm} className='togglebutton'>
            {showSignup ? "Log In" : "Sign Up"}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing