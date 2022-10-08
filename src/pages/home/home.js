import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../component/header/header'
import Sidebar from '../../component/sidebar/sidebar'
import './home.css'

export default function Home() {
    return (
        <div className='dashboard-body'>
            <div className='side-bar-wrapper'>
                <Sidebar />
            </div>
            <div className='main-area-wrapper'>
                <Outlet/>
            </div>
        </div>
    )
}
