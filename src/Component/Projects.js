import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import laptop from '../image/mainbg.jpg';
import blog from '../image/blog.PNG'; 
import Blog from '../image/Capture.PNG'; 
import disney from '../image/disney.PNG';
import scholl from '../image/escholl.PNG';
import ordekdin from '../image/ordekdin.PNG';
import panda from '../image/panda.PNG';
import portal from '../image/doctorportal.PNG';
import {GrTechnology} from 'react-icons/gr';
import {FaLaptopCode, FaGitSquare} from 'react-icons/fa';
import {BiDetail} from 'react-icons/bi';
import { GoEye} from 'react-icons/go';

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';
  
  SwiperCore.use([Pagination,Navigation]);
const Projects = () => {
    return (
        <>
              <div className="project_container" id='project_section'>
                  <h2 className='text-dark fw-bold text-center py-3'> Amazing Demo Projects</h2>
                <div className="container py-5  pe-4 pe-md-0  py-md-0  d-flex align-items-center" data-aos='fade-right-up' data-aos-duration='1300'>
                <Swiper  pagination={{
                "type": "fraction"
                }} navigation={true} className="mySwiper rounded   ">
                <SwiperSlide> 
                   <div className="swiper_img">
                   <img src={Blog} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                       <h3 className='d-inline'>
                           <FaLaptopCode/> Blog-Application
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/Fancy-Blog-Application' title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://fancyblogapp.netlify.app'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>
                        <p> <GrTechnology className='project_icon' /> ReactJS,  React-Redux, Express, NodeJS, Mongodb </p>
                        <small className='text-muted'> <BiDetail className='project_icon' /> This is fully functional Web Application built with modern MERN Stack . You can post own blog and update with this site.   </small>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                   <div className="swiper_img">
                   <img src={ordekdin} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                       <h3 className='d-inline'>
                           <FaLaptopCode/> ordekdin.com  
                        </h3>
                        <a target='blank' href=' https://github.com/saymanbro/Metrimony_Service_App' title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://ordekdin.netlify.app/'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>
                        <p> <GrTechnology className='project_icon' /> ReactJS,  React-Redux, Express, NodeJS, Mongodb </p>
                        <small className='text-muted'> <BiDetail className='project_icon' /> With this WebApp people can find there favorite Boy or Girls CV to marry right person. People also can create own CV . We do not charge money. This site is open for all. I think this is so pretty simple WebApp.  </small>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                <div className="swiper_img">
                   <img src={blog} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                      <h3 className='d-inline'>
                           <FaLaptopCode/> Modern Blog Web App 
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/Modern_Blog_App'title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a href='https://modernblogapp.netlify.app' target='blank' className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>
                        <p> <GrTechnology className='project_icon' /> ReactJS, React-Redux, Express, NodeJS </p>
                        <small className='text-muted'>  <BiDetail className='project_icon' />Here you can express your self by creating amazing blog. This is too close facebook because anyone can like blogs.you can also delete or Update your blog any time without page refresh.</small>
                    </div>
                </SwiperSlide>
              
                
                <SwiperSlide> 
                <div className="swiper_img">
                   <img src={disney} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                      <h3 className='d-inline'>
                           <FaLaptopCode/> Disney Clone
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/Disney-Clone-'title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://disneycloneapp.netlify.app'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>

                        <p> <GrTechnology className='project_icon' /> ReactJS, React-Redux, Express, NodeJS </p>
                        
                        <small className='text-muted'> <BiDetail className='project_icon' />  Hey Dude, This is  popular Disney WebApp clone. This clone site has awesome features and attractive look. You can spent some time here and enjoy Disney</small>
                    </div>
                 </SwiperSlide>


                <SwiperSlide> 
                <div className="swiper_img">
                   <img src={portal} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                      <h3 className='d-inline'>
                           <FaLaptopCode/> Doctors Portal
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/Doctors_Portal_WebApp' title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://moderndoctorsportal.netlify.app/'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>

                        <p> <GrTechnology className='project_icon' /> ReactJS, Express, NodeJS, Mongodb </p>
                        
                        <small className='text-muted'>  <BiDetail className='project_icon' /> This is real-life project. People can register their appointments with doctor and see their appointment details.
                        this site very good looking and user friendly.</small>
                    </div>
                </SwiperSlide>
                <SwiperSlide> 
                <div className="swiper_img">
                   <img src={panda} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                      <h3 className='d-inline'>
                           <FaLaptopCode/> Panda E-commerce  Design
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/Panda-Commerce'title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://saymanbro.github.io/Panda-Commerce/'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>
                            <p> <GrTechnology className='project_icon' />HTML CSS JAVASCRIPT </p>

                        
                        <small className='text-muted'> <BiDetail className='project_icon' /> It just a simple E-commerce site design.
                        this design is very modern and attractive.</small>
                    </div>
                 </SwiperSlide>
                 {/* <SwiperSlide> 
                <div className="swiper_img">
                   <img src={scholl} alt=""  className='img-fluid'/> 
                   </div>
                    <div className='project_details'>
                      <h3 className='d-inline'>
                           <FaLaptopCode/> E-school Design
                        </h3>
                        <a target='blank' href='https://github.com/saymanbro/E-School-Site'title=' Site_Code_Link' className='mx-4 project_icon'> <FaGitSquare /></a> <a target='blank' href='https://saymanbro.github.io/E-School-Site/school.html'className="mx-4 project_icon" title='Live Site Link'> <GoEye /></a>

                            <p> <GrTechnology className='project_icon' />HTML CSS JAVASCRIPT </p>
                        
                        <small className='text-muted'>  <BiDetail className='project_icon' /> It is a simple online school design projects.</small>
                    </div>
                 </SwiperSlide> */}
              
                </Swiper>
                </div>
              </div>
        </>
    );
};

export default Projects; 