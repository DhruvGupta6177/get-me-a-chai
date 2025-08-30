"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useState,useEffect } from "react"
import { useRouter } from 'next/navigation'
import React from 'react'


const Dashboard = () => {
    const { data: session} = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            const router = useRouter()
            router.push('/login')
        }
    }, [router, session])
    

    if (!session) {
        const router = useRouter()
        router.push('/login')
    }

    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default Dashboard
