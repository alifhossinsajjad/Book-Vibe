import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
           
                <Outlet>
                   
                </Outlet>
          
            <Footer />
        </div>
    );
};

export default Root;