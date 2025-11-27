import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';


const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster position="top-right" reverseOrder={false} />
            <Outlet>

            </Outlet>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;