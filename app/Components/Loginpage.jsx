"use client"

import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Loading from '../loading'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function Loginpage() {
  const router = useRouter()

  const [isloading, setIsloading] = useState(true)

  const [fromData, setFormData] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const json = await res.json()
    localStorage.setItem('token', json.token)
    if (json.ok) {
      router.push('/add')
    }
    else {
      router.push('/add')
    }

  }

  const handleInputChange = (e) => {
    console.log(email, password)
    setFormData({
      ...fromData,
      [e.target.name]: e.target.value // <-- This is the problem line 
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1000);
  }
    ,)

  return (
    <>
      {isloading ? <Loading /> : <div>
        <div className="max-w-screen-xl mt-20 sm:mt-10 sm:mx-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <span
                className="text-2xl text-purple-500 xl:text-3xl font-extrabold"
              >VeriTrust.</span>
            </div>
            <div className="mt-0 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Welcome Back, Login!
              </h1>
              <div className="w-full flex-1 mt-8">

                <div className="mx-auto max-w-xs">
                  <form onSubmit={handleSubmit} onChange={handleInputChange}>
                    <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type='submit'>
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy={7} r={4} />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">
                        Login
                      </span>
                    </button>
                  </form>
                  {query && <div className="text-green-500 text-md mt-2">{query}</div>}

                  <div className="mt-10 mb-4 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Don't have an account?
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5" >
                      <Link href={"/register"}>
                        <span className="ml-4">
                          Sign Up with VeriTrust
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")' }} />
          </div>
        </div>
      </div>}

    </>
  )
}

export default Loginpage