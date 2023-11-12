import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import vid1 from '../../../Resources/video6.mp4';
import  { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
function Landing1() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [display,setDisplay]=React.useState(false)
    useEffect(() => {
        const videoElement = document.getElementById('videoSlide');
    
        const handleVideoLoaded = () => {
          setVideoLoaded(true);
        };
    
        videoElement.addEventListener('loadeddata', handleVideoLoaded);
    
        return () => {
          videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        };
      }, []);
      const handleMenuClick=()=>{
        setDisplay(!display)
      }
  return (
    <div>
      <div>
      <header className='Landing1Header'>
        <Link to="#" className='brand'>Travel</Link>
        <div className='menu-btn'></div>
        <div className='Navigation'>
          <div className='navigation-items'>
            <Link to="#">Home</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/ContactUs">Contact us</Link>
            <Link to="/AboutUs">About us</Link>
            
          </div>
          <Link to="/LoginForm" className='PersonIcon'> <PersonIcon/></Link>
        </div>
        <div className='menuicon' >
        <MenuIcon  style={{ fontSize: '4rem' }} onClick={handleMenuClick} />

        </div>
        <br/>
        { display && (
          <div className='mobileMenu' >
            <div>
          <Link to="#">Home</Link>
          </div>
          <br/>
          
          <div>
          <Link to="/packages">Packages</Link>
          </div>
          <br/>
       
          <div>
          <Link to="/ContactUs">Contact us</Link>
          </div>
          <br/>
          
          <div>
          <Link to="/AboutUs">About us</Link>
          <br/>
          
          </div>
          </div>
        )
         
        }
      </header>
      </div>
      <section className='home'>
        <video id="videoSlide" className={`videoSlide ${videoLoaded ? 'fade-in' : ''}`} autoPlay muted loop>
          <source src={vid1} type="video/mp4" />
          <source src={vid1} type="video/webm" />
          <source src={vid1} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className='content'>
          <h1>
            Chilalo<br/>
            <span>Tour and Travel</span>
          </h1>
          <p>Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu. Adipisicing laboris qui ex est labore do dolor nulla enim.</p>
          <Button variant='contained'>Packages</Button>
        </div>
      </section>
    </div>
  )
}

export default Landing1
