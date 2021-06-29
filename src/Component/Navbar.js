import React ,{useState } from 'react';
import menuBar from '../image/menu.png';
import profile from '../image/circle_profile.png';
import { FaHome } from 'react-icons/fa'
import {  IoIosBowtie } from "react-icons/io";
import { BsFillAwardFill } from "react-icons/bs";
import {  MdContactMail,MdLaptopMac} from 'react-icons/md';


const Navbar = () => {
 
    return (
        <>
         
              <div className='navbar' >
                        <div  className= "navMenu">
                         <a href="#home_section" className="nav_link "> < FaHome className='nav_icon' /></a>  
                          <a href="#about_section" className="nav_link "> <IoIosBowtie className='nav_icon' /> </a> 
                          <a href="#skill_section" className="nav_link "> <BsFillAwardFill className='nav_icon' /> </a> 
                          <a href="#project_section" className="nav_link "> < MdLaptopMac className='nav_icon'/></a> 
                          <a href="#contact_section" className="nav_link "> < MdContactMail className='nav_icon'/></a> 
                         
                        </div>
              </div>
        </>
    );
};

export default Navbar;