import React from 'react';
import Avatar from '../../assets/avatar.jpg'
import "./profile.css"

export default function Profile() {
    return (
        <div>
            <div className="dropdown">
                <a className=" dropdown-toggle d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {/* Dropdown link */}
                    

                    <div className='d-flex align-items-center'>
                        <div className='avatar-wrapper1'>
                            <img src={Avatar} className="avatar-img1" alt="profile-pic" />
                        </div>
                        <div>
                            <p className='mb-0 text-start'>Zahid</p>
                            <p className='mb-0'>abcdefabcd@gmail.com</p>
                        </div>
                        <p>logo</p>
                    </div>
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                    <li><a className="dropdown-item" href="#">Name</a></li>
                </ul>
            </div>
        </div>
    )
}
