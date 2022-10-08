import React from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    return (
        <>
            <div>
                <div className='sidebar-box px-4'>
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink>
                                <p className='smartup m-0'>Movie App</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/top-rated'}><p className='profile m-0'>Top Rated</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/new-release'}> <p className='profile m-0'>New Release</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/latest'} ><p className='profile m-0'>Latest</p></NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'}><p className='profile m-0'>High Rated</p></NavLink>
                        </div>
                    </div>
                </div>
                <div className='ps-4 pe-5 mt-3'>
                    <div className='mb-2'>
                        <div className=' d-flex justify-content-between w-100'>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-square-instagram"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                            <p className='profile1 m-0'>@ 2018 smartup.io</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
