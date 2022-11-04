import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../component/header/header'
import RightSidebar from '../../component/right-sidebar/rightSidebar'
import Search from '../../component/search/search'
import Sidebar from '../../component/sidebar/sidebar'
import './home.css'

export default function Home() {
    return (
        <div className='dashboard-body'>
            <div className='side-bar-wrapper'>
                <Sidebar />
            </div>
            <div className='main-area-wrapper'>
                <div className='mt-4'>
                    <Header />
                </div>
                <Outlet />
            </div>
            <div className='right-side-wrapper'>
                <RightSidebar/>
            </div>
        </div>
    )
}
