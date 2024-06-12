import React from 'react'
import './Dashboard.css'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const user = useSelector((state) => state.userReducer.userdetails)
    return (
        <div className='user-profile'>
            <h1>Welcome {user.name}</h1>
            <p>Email:{user.email}</p>
            <p>Address:{user.address}</p>
        </div>
    )
}

export default Dashboard