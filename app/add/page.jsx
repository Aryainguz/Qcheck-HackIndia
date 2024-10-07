"use client"
import React from 'react'
import AddDryProduct from '../components/AddDryProduct'

const page = () => {
    const token = localStorage.getItem('token')
  return (
    <>
    {token ? <><AddDryProduct/></> : <h1 className='text-2xl text-center font-bold'>Please Login to continue</h1>}
    
    </>
  )
}

export default page