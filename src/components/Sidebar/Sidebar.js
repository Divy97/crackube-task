import React from 'react'
import logo from '../../assets/Union.svg'
import home from '../../assets/Home.svg'
import Campaign from '../../assets/Category.svg'
import Discovery from '../../assets/Discovery.svg'
import Spending from '../../assets/Activity.svg'
import Analytics from '../../assets/Graph.svg'
import Form from '../../assets/Edit Square.svg'
import Notification from '../../assets/Notification.svg'
import Wallet from '../../assets/Wallet.svg'

import './sidebar.css';
const Sidebar = () => {

    const items = [
        {
            image: home,
            text: 'Dashboard',
            active: false
        },
        {
            image: Campaign,
            text: 'Campaign',
            active: false
        },
        {
            image: Discovery,
            text: 'Social Network',
            active: false
        },
        {
            image: Spending,
            text: 'Spending',
            active: false
        },
        {
            image: Analytics,
            text: 'Analytics',
            active: false
        },
        {
            image: Form,
            text: 'Form Campaign',
            active: false
        },
        {
            image: Notification,
            text: 'Notification',
            active: false
        },
        {
            image: Wallet,
            text: 'Payment',
            active: true
        }
    ]
    return (
        <div className='sidebar_container'>
            <div className='logo_container'>
                <img src={logo} alt='logo_image' className='logo_img' />
                <p className='logo_text'>Iklan.</p>
            </div>
            {
                items.map((e, i) => {
                    return (
                        <div className='item' key={i}>
                            <img src={e.image} alt='item_image' className='item_image' />
                            <p className={e.active === true ? 'item_text active' : 'item_text '}>{e.text}</p>
                            {e.active && <div className='activeSquare'></div>}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Sidebar