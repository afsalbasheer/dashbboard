import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import "./DashboardLayout.css"

export default function DashboardLayout({children}) {
  return (
    <>
    <Topbar />
    <div className="container">
        <Sidebar/>
        {children}
    </div>
    </>
  )
}
