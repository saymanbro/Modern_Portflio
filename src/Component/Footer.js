import React from 'react';
import { FaCopyright } from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
            <div className="container-fluid bg-dark text-white p-3 ">
                <p className='text-center '> <FaCopyright /> All rights reserved {new Date().getFullYear()} </p>
            </div>
           
        </div>
    );
};

export default Footer;