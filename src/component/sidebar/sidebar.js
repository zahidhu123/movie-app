import React from 'react'
import { MdAccessTime, MdAlarmOn, MdGroups, MdHomeFilled, MdOutlineBookmarkBorder, MdOutlineExplore, MdOutlineFileDownload, MdOutlineHelpOutline, MdOutlineSettings, MdStarOutline } from 'react-icons/md';
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
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/popular-movies'} className="home-wrapper">
                                <MdHomeFilled className='icon-img' />
                                <p className='home-nav-title m-0'>Home</p>
                                {/* <sup className='movie-power'> {'20'} </sup> */}
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/discovery'} className="home-wrapper">
                                <MdOutlineExplore className="icon-img" />
                                <p className='home-nav-title m-0'>Discovery</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/latest'} className="home-wrapper">
                                <MdGroups className="icon-img" />
                                <p className='home-nav-title m-0'>Community</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdAlarmOn className="icon-img" />
                                <p className='home-nav-title m-0'>Coming soon</p>
                            </NavLink>
                        </div>
                    </div>
                    <hr className='hr-line' />
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
                                <MdAccessTime className='icon-img' />
                                <p className='home-nav-title m-0'>Recent</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdOutlineBookmarkBorder className='icon-img' />
                                <p className='home-nav-title m-0'>Bookmarked</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdStarOutline className="icon-img" />
                                <p className='home-nav-title m-0'>Top rated</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdOutlineFileDownload className="icon-img" />
                                <p className='home-nav-title m-0'>Downloaded</p>
                            </NavLink>
                        </div>
                    </div>
                    <hr className='hr-line' />
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdOutlineSettings className="icon-img" />
                                <p className='home-nav-title m-0'>Setting</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <NavLink to={'/high-rated'} className="home-wrapper">
                                <MdOutlineHelpOutline className="icon-img" />
                                <p className='home-nav-title m-0'>Help</p>
                                <p className='home-nav-title m-0'>contact</p>
                                <p className='home-nav-title m-0'>Latest</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
