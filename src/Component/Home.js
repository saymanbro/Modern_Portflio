import React, { useEffect } from 'react';
import git from '../image/github.png'
import linkedin from '../image/linkedin.png';
import fb from '../image/facebook-logo.png';
import instagram from '../image/instagram-logo.png';
import Typed from 'react-typed';


const Home = () => {
  
    const zoomInOut = () =>{
        
        setTimeout(()=>{        
            document.getElementById('title').style.transition = '850ms';
            document.getElementById('title').style.transform = 'scale(1.9)';           
        }, 3000)
   
       
    }
  useEffect(()=>{
    zoomInOut();
  },[])
       
  


    return (
                <>
                    <section id='home_section' className="home_container">
                       <div className="header_content">
                       <p className='title' id='title'>Hello There,</p>
                        <h1 className="name">I'm Mohammad Al-Amin</h1>
                         <div className="typed">
                         <Typed className='title '
                            strings={[' Frontend Developer | Future MERN Developer ']}
                            typeSpeed={30}
                            backSpeed={50}
                            loop
                        />
                         </div>
                        {/* <p className="title"> Frontend Developer | Future MERN Developer </p> */}
                        <br />
                            <div className="d-block d-md-flex">
                <a href="#contact_section">  <button className="hireBtn ms-3" >HIRE ME</button></a>    
                     <a target='blank' href='https://drive.google.com/file/d/1de6S4O8ND5lkoTUJj4BpOIwRB8SOfohS/view?usp=sharing'> <button className="cvBtn ms-3">  DOWNLOAD CV</button>  </a>
                            </div>

                        <div className="link_div">
                            <a target='blank' className='mx-1' href="https://github.com/saymanbro"> <img src={git} alt="git" /> </a>
                            <a target='blank' className='mx-1' href="https://www.linkedin.com/in/al-aminsayman000/">  <img src={linkedin} alt="linkedin" />  </a>
                            <a target='blank' className='mx-1' href="https://www.facebook.com/alamin.simon.33"> <img src={fb} alt="fb" /> </a>
                            <a target='blank' className='mx-1' href="https://www.instagram.com/surviveal_leader/"> <img src={instagram} alt="instagram" /> </a>
                        </div>
                       
                       </div>
                     
                    </section>
                </>
    );
};

export default Home;