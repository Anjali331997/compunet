import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUserDeatils } from '../../redux/actions/ActionCreators';

const Login = () => {

  const initialState = {
    password: "",
    email: ""
  }
  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const login = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,
        { ...user },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log(res.data)
          dispatch(setUserDeatils(res.data.user))
          navigate(`/dashboard`)
        })
    } catch (err) {
      console.log(err)
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='header-signup'>Login</h2>
      <input type='email' placeholder='username@email.com' name='email' value={user.email} onChange={handleChange} />
      <input type='password' placeholder='password' name='password' value={user.password} onChange={handleChange} />
      <input type="submit" value={"Login"} />
    </form>
  )
}

export default Login