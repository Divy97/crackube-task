import React from 'react'
import Notification from '../../assets/Notification2.svg'
import Message from '../../assets/Message.svg'
import Setting from '../../assets/Setting.svg'
import Profile from '../../assets/Ellipse 57.svg'

import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar_container'>
            <input type='search' className='nav_searchBar' placeholder='Search here' />
            <div className='icons'>
                <div className='icon_container'>
                    <img src={Notification} alt='item_image' className='item_image' />
                </div>
                <div className='icon_container'>
                    <img src={Message} alt='item_image' className='item_image' />
                </div>
                <div className='icon_container'>
                    <img src={Setting} alt='item_image' className='item_image' />
                </div>
            </div>
            <div className='profile'>
                <div className='left'>
                    <p>Samantha <br /> <span style={{
                        color: '#828282'
                    }}> Peterdraw.co </span></p>
                    {/* <p></p> */}
                </div>
                <div className='right'>
                    <img src={Profile} alt='item_image' className='profile_image' />
                </div>
            </div>
        </div>
    )
}

export default Navbar