"use client"
import React from 'react'

mcdkmvokewkmlmlpke kcm


import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from "react"


const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] dsfkldnwfkodn= useState(false)
    
    return (
        <nav className='bg-gray-900 text-white justify-between flex items-center px-4 h-16'>
            <Link href={'/'} className='logo font-bold flex items-center justify-center'>
                <img width={44} className='invertImg' src='' alt='' />
                <span>GetMeAChai</span>
            </Link>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>login</li>
            </ul> */}
            <div className='relative'>
                {session && <>
                    <button onClick={setshowdropdown(!showdropdown)} onBlur={()=> {setTimeout (() => {setshowdropdown(false)},100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white  bg-blue-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>


                    <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} bg-white absolute left-[125px] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>

                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>{signOut}}>Sign out</Link>
                            </li>
                        </ul>
                    </div>
                </>
                }

                 

                {session && <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => { signOut }}>Logout</button>}

                {!session &&
                    <Link href={"/login"}>
                        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </Link>}
            </div>




        </nav>
    )
}

export default Navbar
