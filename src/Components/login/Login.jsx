import React from 'react'

const Login = () => {
  return (
    <form>
        <h2 className='header-signup'>Login</h2>
        <input type='email' placeholder='username@email.com'/>
        <input type='password' placeholder='password'/>
        <input type="submit" value={"Login"} />
    </form>
  )
}

export default Login