import React, { useState, useEffect } from 'react';
import Landing1 from './Components/Landing1';
import Landing2 from './Components/Landing2';
import Landing3 from './Components/Landing3';
import Footer from '../Footer';

function LandingPage() {


  return (
    <div className="LandingPage">
      <Landing1/>
     
      <div className='Landingtwonandthree'>
      <Landing2/>
      <br/>
      <Landing3 className="landing3"/>
      <br/>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;