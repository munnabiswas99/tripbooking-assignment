
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/navbar/Navbar';
import Footer from '../pages/footer/Footer';

const RootLayout = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;