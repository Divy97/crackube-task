import React from 'react'
import Button from '../Button/Button'
import './balance.css';

const Balance = () => {
    return (
        <div className='balance_container'>
            <div className='balance_left'>
                <div className='bottom_title'>
                    <p className='bottom_title_text'>Add Balance Form</p>
                    <svg style={{
                        marginRight: '2rem'
                    }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                        <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                        <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                    </svg>
                </div>
                <div className='balance_form_top'>
                    <div className='balance_form_div'>
                        <label className='balance_form_label'>Campaign Name*</label>
                        <input type='text' className='balance_form_input' placeholder='50% OFF Dimsum Shauky Nacky' />
                    </div>

                    <div className='balance_form_div'>
                        <label className='balance_form_label'>Due Date*</label>
                        <input type='date' value='23 March 2021' className='balance_form_input date' />
                    </div>
                </div>
                <div className='balance_form_top'>
                    <div className='balance_form_div'>
                        <label className='balance_form_label'>Ads ID*</label>
                        <input type='text' className='balance_form_input' placeholder='AD-2351682' />
                    </div>

                    <div className='balance_form_div'>
                        <label className='balance_form_label'>Total*</label>
                        <div style={{
                            display: 'flex',
                            alignItems: "center",
                            gap: '1rem'
                        }}>
                            <input type='text' className='balance_form_input' placeholder='$ 1432,65' style={{
                                width: '8rem'
                            }} />
                            <Button buttonValue='Send' buttonBackgroundColor='#2BC155' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='balance_right'>
                <div className='balance_right_top'>
                    <div className='balance_right_top_left'>
                        Ad Campaign <br /> Tutorials Video
                    </div>
                    <div className='balance_right_top_right'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                            <circle cx="41" cy="41" r="40.5" stroke="white" />
                            <path d="M33.4074 57.7037L54.6667 40.2407L33.4074 22.7778" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='balance_right_bottom'>
                    <div className='balance_right_top_left'>
                        How to make <br /> Great Campaign <br /> Video
                    </div>
                    <div className='balance_right_top_right'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                            <circle cx="41" cy="41" r="40.5" stroke="white" />
                            <path d="M33.4074 57.7037L54.6667 40.2407L33.4074 22.7778" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance