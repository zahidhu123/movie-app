import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../component/header/header'
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
                <div className='row mt-4'>
                    <div className="col-lg-6">
                        <Search />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
