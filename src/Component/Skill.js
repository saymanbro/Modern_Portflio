import React from 'react';

const Skill = () => {
    return (
        <>
            <section id='skill_section' className="skill_section d-flex align-items-center">
                    <div className="container">
                        <div className="row   py-5 py-md-5 align-items-center">
                            <div className="col-12 col-md-5 "  data-aos='fade-right' data-aos-duration='1500'>
                                <h1 className="skill_title">
                                    Skills & <br /> Experience
                                </h1>
                                <p className="skill_subTitle"> Since middle of the last year I started the journey with Popular Community <span className="text-info">Programming Hero.</span> The scope of my work is a large part of the frontend : Fancy-design, Responsive-layout, Single-Page-Application, User-Friendly-Website, Modern-Animation, JWT-Authentication,Readable Code and other work based on HTML /CSS / JS.
                                 <br />
                                  <br />
                                 I also build FULL-STUCK WebApp with Popular MERN STUCK is very trending and modern stuck in 2021.
                                <br />
                                 <br />
                                 <strong className="tech"> Core Tech : HTML-CSS-Javascript-ReactJS-NodeJs-ExpressJs-Mongodb-Mongoose. </strong> <br />
                                 <strong className="tech">Framework: Bootstrap 5 - Material Ui</strong>
                                </p>
                               
                            </div>
                            <div className="col-12 col-md-7 px-3 px-md-4 progress_content"  data-aos='fade-right' data-aos-duration='1500'>
                            <h5 className='text-success'>HTML</h5>
                            <div className="progress">
                               
                        <div className="progress-bar  progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width:" 90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="text-info">CSS</h5>
                        <div className="progress">
                        <div className="progress-bar  progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: "75%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="text-warning">JAVASCRIPT</h5>
                        <div className="progress">
                        <div className="progress-bar  progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{width: "70%" }}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h5 className="text-primary">REACT JS</h5>
                        <div className="progress">
                        <div className="progress-bar  progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: "85%" }}aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                         <div className='mt-5 ex_content'>
                         <small className="mx-1 achive"> * 20+ Projects done </small><small className="mx-1 achive"> * 10+ MERN Projects done </small><small className="mx-1 achive">* Master At Self Learning </small>
                         </div>
                            </div>
                        </div>
                    </div>    
            </section> 
        </>
    );
};

export default Skill;