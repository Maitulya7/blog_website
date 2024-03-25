import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <main>
                <Navbar />
                <Outlet />
            </main>
        </>
    )
}

export default Layout