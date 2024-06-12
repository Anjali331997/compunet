import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const initialState = {
        email: "",
        password: "",
        name: "",
        address:""
    }
    const navigate = useNavigate();
    const [newUser, setnewUser] = useState(initialState);

    const handleChange = (e) => {
        setnewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const resgister = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register`,
               {...newUser},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    console.log(res)
                    navigate(`/login`)
                })
        } catch (err) {
            console.log(err)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await resgister();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className='header-signup'>Sign Up</h2>
            <input type='text' placeholder='Enter you name' name='name' value={newUser.name} onChange={handleChange} />
            <input type='email' placeholder='username@email.com' name='email' value={newUser.email} onChange={handleChange} />
            <input type='password' placeholder='password' name='password' value={newUser.password} onChange={handleChange} />
            <input type='text' placeholder='Address' name='address' value={newUser.address} onChange={handleChange} />
            <input type='submit' value={"Sign Up"} />
        </form>
    )
}

export default Signup