import React from 'react'
import './dashboard.css';
const DashBoard = () => {
    return (
        <>
            <h1 className='dashboard_title'>New Campaign</h1>
            <div className='dashBoard_container'>
                <div className='left'>
                    <div className='top'>
                        <div className='section1'>
                            <p className='section1_text'>Current Balance</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="51" viewBox="0 0 83 51" fill="none">
                                <circle opacity="0.15" cx="25.5" cy="25.5" r="25.5" fill="white" />
                                <circle opacity="0.15" cx="57.5" cy="25.5" r="25.5" fill="white" />
                            </svg>
                        </div>
                        <div className='section2'>
                            <p className='section2_text'>$ 82,638.82</p>
                        </div>
                        <div className='section3'>
                            <p className='section3_text'>1234***890</p>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='bottom_title'>
                            <p className='bottom_title_text'>Payment Due</p>
                            <svg style={{
                                marginRight: '1rem'
                            }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                            </svg>
                        </div>
                        <div className='payment_items'>
                            <div className='payment_item'>
                                <input type='checkbox' />
                                <p>Ads ID</p>
                                <p>Social Network</p>
                                <p>Total Stipend</p>
                                <p>Status</p>
                                <p></p>
                                <p></p>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                                </svg> */}
                            </div>
                            <div className='payment_item_active'>
                                <input type='checkbox' />
                                <p>#AD-001223</p>
                                <p>Youtube</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='unpaid_border'>Unpaid</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                                </svg>
                            </div>
                            <div className='payment_item'>
                                <input type='checkbox' />
                                <p>#AD-001223</p>
                                <p>Instagram</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$232.23</p>
                                <p className='unpaid_border'>Unpaid</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                                </svg>
                            </div>
                            <div className='payment_item'>
                                <input type='checkbox' />
                                <p>#AD-001223</p>
                                <p>Facebook</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$532.23</p>
                                <p className='unpaid_border'>Unpaid</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                    <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                    <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='transaction'>
                        <div className='bottom_title'>
                            <p className='bottom_title_text'>Latest transactions</p>
                            <svg style={{
                                marginRight: '1rem'
                            }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                                <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                                <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                            </svg>
                        </div>
                        <div className='transaction_items'>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>Name ADS</p>
                                <p style={{
                                    marginLeft: '7rem'
                                }}>Total Stipend</p>
                                <p>Status</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                            <div className='transaction_item'>
                                <input type='checkbox' />
                                <p>50% OFF Floor Lamp Get it Now!</p>
                                <p style={{
                                    color: '#2BC155'
                                }}>$222.23</p>
                                <p className='paid_border'>Paid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard