import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Routes, Route } from 'react-router-dom'
import NoPageFound from './NoPageFound'
const Account = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </>
    )
}

export default Account
