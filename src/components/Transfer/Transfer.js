
import Button from '../Button/Button';
import Setting from '../../assets/Setting.svg'
import './transfer.css';

const Transfer = () => {
    return (
        <div className='transfer_container'>
            <div className='transfer_left'>
                <h1 className='transfer_title'>Transfer</h1>
                <div className='transfer_form'>
                    <div className='transfer_form_div'>
                        <label className='transfer_label'>Transfer to </label>
                        <input className='transfer_input' type='text' placeholder='kevin.to@mail.xyz' />
                    </div>
                    <div className='transfer_form_div'>
                        <label className='transfer_label'>Amount </label>
                        <input className='transfer_input' type='text' placeholder='kevin.to@mail.xyz' />
                    </div>
                    <div className='transfer_form_div'>
                        <label className='transfer_label'>Your Pin </label>
                        <div className='pinDiv'>
                            <input className='transfer_input2' type='password' placeholder='****' />
                            <Button buttonValue='Transfer' buttonBackgroundColor='#369DC9' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='transfer_right'>
                <div className='bottom_title'>
                    <p className='bottom_title_text'>Billing info</p>
                    <svg style={{
                        marginRight: '1rem'
                    }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 18.3334C17.4728 18.3334 18.6667 17.1395 18.6667 15.6667C18.6667 14.1939 17.4728 13 16 13C14.5272 13 13.3333 14.1939 13.3333 15.6667C13.3333 17.1395 14.5272 18.3334 16 18.3334Z" fill="#C4C4C4" />
                        <path d="M5.3333 18.3334C6.80606 18.3334 7.99997 17.1395 7.99997 15.6667C7.99997 14.1939 6.80606 13 5.3333 13C3.86055 13 2.66664 14.1939 2.66664 15.6667C2.66664 17.1395 3.86055 18.3334 5.3333 18.3334Z" fill="#C4C4C4" />
                        <path d="M26.6667 18.3334C28.1394 18.3334 29.3333 17.1395 29.3333 15.6667C29.3333 14.1939 28.1394 13 26.6667 13C25.1939 13 24 14.1939 24 15.6667C24 17.1395 25.1939 18.3334 26.6667 18.3334Z" fill="#C4C4C4" />
                    </svg>
                </div>
                <div className='transfer_right_container'>
                    <div className='transfer_right_container_item'>
                        <p>Company</p>
                        <p style={{
                            marginLeft: '2.5rem'
                        }}>Address</p>
                        <p style={{
                            marginLeft: '2.5rem'
                        }}>Amount</p>
                        <p style={{
                            marginLeft: '2.5rem'
                        }}>Status</p>
                        <p></p>
                        <p></p>
                    </div>

                    <div className='transfer_right_container_item'>
                        <p style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.5" cy="16.5" r="16.5" fill="#2BC155" />
                                <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020" />
                            </svg>
                            <span>Peterdraw.co</span>
                        </p>
                        <p>New York Steel 16th</p>
                        <p>$ 122.657</p>
                        <p>
                            <Button buttonValue='Paid' buttonBackgroundColor='#2BC155' />
                        </p>
                        <p>
                            <img src={Setting} alt='setting_icon' />
                        </p>
                        <p></p>
                    </div>
                    <div className='transfer_right_container_item'>
                        <p style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.5" cy="16.5" r="16.5" fill="#FD6162" />
                                <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.2093H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020" />
                            </svg>
                            <span>Peterdraw.co</span>
                        </p>
                        <p>New York Steel 16th</p>
                        <p>$ 122.657</p>
                        <p>
                            <Button buttonValue='Pending' buttonBackgroundColor='#FFF' />
                        </p>
                        <p>
                            <img src={Setting} alt='setting_icon' />
                        </p>
                        <p></p>
                    </div>
                    <div className='transfer_right_container_item'>
                        <p style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.5" cy="16.5" r="16.5" fill="#369DC9" />
                                <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.20929H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020" />
                            </svg>
                            <span>Peterdraw.co</span>
                        </p>
                        <p>New York Steel 16th</p>
                        <p>$ 122.657</p>
                        <p>
                            <Button buttonValue='Paid' buttonBackgroundColor='#2BC155' />
                        </p>
                        <p>
                            <img src={Setting} alt='setting_icon' />
                        </p>
                        <p></p>
                    </div>
                    <div className='transfer_right_container_item'>
                        <p style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                <circle cx="16.5" cy="16.5" r="16.5" fill="#D45BFF" />
                                <path d="M19.3303 21.3717H13.3566L12.3681 24.2297H9.2093L14.6029 9.20929H18.1055L23.4991 24.2297H20.3188L19.3303 21.3717ZM18.5138 18.965L16.3434 12.6904L14.1731 18.965H18.5138Z" fill="#202020" />
                            </svg>
                            <span>Peterdraw.co</span>
                        </p>
                        <p>New York Steel 16th</p>
                        <p>$ 122.657</p>
                        <p>
                            <Button buttonValue='Unpaid' buttonBackgroundColor='#FD6162' />
                        </p>
                        <p>
                            <img src={Setting} alt='setting_icon' />
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer