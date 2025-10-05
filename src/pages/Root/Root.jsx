import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
           
                <Outlet>
                   <div>
                    <Home/>
                   </div>
                </Outlet>
          
            <Footer />
        </div>
    );
};

export default Root;