import React from 'react';
import profile from '../image/image 10.png'
const About = () => {
    return (
        <>
                <section id='about_section' className="about_container d-flex align-items-center">
                     <div className="container ">
                        <div className="row py-md-5 py-0   justify-content-between  px-md-0 align-items-center"  >
                            <div className="col-12 col-sm-12 col-md-6 order-1   order-md-0 "  >
                            <img src={profile} alt="profile" className="img-fluid" />
                               
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 order-0 order-md-1 text-center  px-4 mb-4 mb-md-0" data-aos='fade-right' data-aos-duration='1100'>
                            <h1 className='about_title'>About Me</h1>
                                <p className='text-muted'>Hi ! 😎 I'm Al-Aimn form Cumilla. I'm 20 live tongi, Since 2020 I have been working on Web Design & Development. I use ReactJs which is very popular Libary in 2021. With React I also use NodeJS Mongodb which is very amazing Stack in present. I have built 30+ website and 15+ Web Application with MERN Stack. Now I want to share my hard work and dedication with a renowned company so that I can be more efficient and creative in the future with Web Development. So here are some sample demo projects, I'm pretty sure you will   enjoy it.</p>
                            </div>
                        </div>
                     </div>
                </section>
        </>
    );
};

export default About;