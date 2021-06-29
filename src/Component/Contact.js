import React from 'react';
import { FaFacebookF, FaMapMarkedAlt, FaGithub } from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { MdPhoneIphone } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <>
                <div className="contact_container" id='contact_section'>
                    <div className="container-fluid">
                        <h1 className="contact_heading "> GET IN TOUCH </h1>
                        <div className="row  p-4 d-flex align-items-center justify-content-between">
                            <div className="col-12 col-md-6">
                                <label htmlFor="" className="input_label">Name</label>
                                <input type="text" className="contact_input" placeholder="Company / Your Name" /> <br /><br />
                                <label htmlFor="" className="input_label">Email</label>
                                <input type="text" className="contact_input" placeholder="Company / Your Email" /><br /> <br />
                                <label htmlFor="" className="input_label">Message</label>
                                <textarea name="" id="" cols="30" rows="5" placeholder="Message..........." className="contact_input"></textarea>
                               
                                    <button className="sendBtn">SEND</button>
                              

                            </div>
                            <div className="col-12 col-md-6 ps-0 ps-md-5">
                                    <h4 className="contact_title">CONTACT DETAILS</h4>
                                     <p className="contact_subTitle"> <MdPhoneIphone className='contact_icon me-2'  /> +880 1754-500538</p>
                                     <p className="contact_subTitle">  <CgWebsite className='contact_icon me-2'  /> https:alaminportfolio.netlify.app</p>
                                     <p className="contact_subTitle">< AiOutlineMail  className='contact_icon me-2' /> sayman7588@gmail.com</p>
                                     <p className="contact_subTitle">< FaMapMarkedAlt className='contact_icon me-2'  /> Tongi, Gazipur.</p>
                                    <h4 className="contact_title">SOCIAL</h4>
                                     <a href="" className="contact_icon mx-2"> <FaGithub /> </a>
                                     <a href="" className="contact_icon mx-2"> <ImLinkedin /></a>
                                     <a href="" className="contact_icon mx-2"><GrInstagram /></a>
                                     <a href="" className="contact_icon mx-2"><FaFacebookF /></a>
                                     
                                     <h4 className="contact_title">Opportunities</h4>
                                     <p className="contact_subTitle">Now I'm working on Frontend and also MERN STUCK, <br /> In Future I'll an Full Stuck Developer is help to company</p>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    );
};

export default Contact;