import React from 'react'
import Navbar from './Navbar/Navbar'
import DashBoard from './DashBoard/DashBoard'
import Transfer from './Transfer/Transfer'
import Balance from './Balance/Balance'

const Main = () => {
    return (
        <>
            <Navbar />
            <DashBoard />
            <Transfer />
            <Balance />
        </>
    )
}

export default Main