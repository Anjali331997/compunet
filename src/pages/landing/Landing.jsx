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
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/welcome-board-3688623-3231454.png' alt="" />
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