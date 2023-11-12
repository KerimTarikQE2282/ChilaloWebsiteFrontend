import React from 'react'
import person1 from '../../../Resources/person1.jpeg'
import person2 from '../../../Resources/person2.jpeg'
import person3 from '../../../Resources/person3.jpeg'
import open from '../../../Resources/openingQuotes.png'
import close from '../../../Resources/closingQuotes.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Paper } from '@mui/material'
import  { useState, useEffect } from 'react';

function Landing3() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const imageHeight= 1000; // Adjust the image width as per your requirements
    const travelDistance = window.innerHeight; // Use window.innerHeight as the total distance the image should travel
    const parallaxOffset = ((travelDistance - scrollPosition) / travelDistance) * imageHeight; // Calculate the parallax offset
  return (
    <div className='Testemonials'  style={{ transform: `translateX(-${parallaxOffset}px)` }}>
        <h1>Testimonials from our satisfied customers</h1>
        <div className='innerTestimonial'>
      <Paper className='Testemonial1' elevation={5}>
        <div className='TestimonialHeader'>
        <img src={person1} className='personImg'></img>
        </div>
        
        
        
        <p style={{width: 380, height: 101, color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu. Adipisicing laboris qui ex est labore do dolor nulla enim.</p>
        <br/>
<p  className='TestimonialMaker'>-Daniel Michael</p>      

<div className='TestimonialsFooter'>
<TelegramIcon/>
<WhatsAppIcon/>
<InstagramIcon/>
</div>


</Paper>

      <Paper className='Testemonial2'>
      <div className='TestimonialHeader'>
        <img src={person1} className='personImg'></img>
        </div>
        
        
        
        <p style={{width: 380, height: 101, color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu. Adipisicing laboris qui ex est labore do dolor nulla enim.</p>
        <br/>
<p  className='TestimonialMaker'>-Daniel Michael</p>      

<div className='TestimonialsFooter'>
<TelegramIcon/>
<WhatsAppIcon/>
<InstagramIcon/>
</div>
 </Paper>

      <Paper className='Testemonial3'>
      <div className='TestimonialHeader'>
        <img src={person1} className='personImg'></img>
        </div>
        
        
        
        <p style={{width: 380, height: 101, color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu. Adipisicing laboris qui ex est labore do dolor nulla enim.</p>
        <br/>
<p  className='TestimonialMaker'>-Daniel Michael</p>      

<div className='TestimonialsFooter'>
<TelegramIcon/>
<WhatsAppIcon/>
<InstagramIcon/>
</div>
   </Paper>
      </div>
    </div>
  )
}

export default Landing3
