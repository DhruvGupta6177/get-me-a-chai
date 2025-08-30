"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import React from 'react'
import Dashboard from "@/components/Dashboard"

const Dashboard = () => {
    const { data: session} = useSession()

    if (!session) {
        const router = useRouter()
        router.push('/login')
    }
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default Dashboard
