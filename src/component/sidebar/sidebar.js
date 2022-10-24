import React from 'react'
import { NavLink } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    return (
        <>
            <div>
                <div className='sidebar-box'>
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink>
                                <p className='smartup m-0'>Movie App</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/popular-movies'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Popular Movies</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/new-release'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>New Release</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/latest'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Latest</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>High Rated</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Famous</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
