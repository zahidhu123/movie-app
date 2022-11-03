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
                                <p className='smartup m-0'>MENU</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/popular-movies'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Home</p>
                                <sup className='movie-power'> {'20'} </sup>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/discovery'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Discovery</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/latest'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Community</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Coming soon</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-2 mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink>
                                <p className='smartup m-0'>LIBRARY</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Recent</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>bookmarked</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Top rated</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <i className="fa-solid fa-house home-img"></i>
                                <p className='profile m-0'>Downloaded</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
