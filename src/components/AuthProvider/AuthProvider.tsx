'use client'

import { SessionProvider } from "next-auth/react"
import React from "react"


type props = {
    children: React.ReactNode
}

export const NextAuthProvider = ({children}: props) => {
    return <SessionProvider>
        {children}
    </SessionProvider>
}