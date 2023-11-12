import React from 'react'
import { Link } from 'react-router-dom'
import Aboutus1 from '../../../Resources/Aboutus1.jpg'
import values from '../../../Resources/values.png'
import imge from '../../../Resources/Aboutorg.jpg'
function AboutUsone() {
  return (
    <div className='AboutUsone'>
   
    <header>
      <Link to="#" className='brand'>Travel</Link>
      <div className='menu-btn'></div>
      <div className='Navigation'>
        <div className='navigation-items'>
          <Link to="/">Home</Link>
          <Link to="#">Packages</Link>
          <Link to="#">Contact us</Link>
          <Link to="/AboutUs">About us</Link>
        </div>
      </div>
    </header>
    <section className='AboutUs'>
    
      <div className='AboutUscontent'>
        <h1>
          About us
        
        </h1>
        <p>Magna adipisicing veniam qui magna commodo amet occaecat laboris nostrud fugiat deserunt cillum deserunt ex. Ullamco ipsum officia qui fugiat. Aute id quis elit eu ullamco labore exercitation est eu non aliqua proident officia ad. Consequat do et dolore non aliquip cupidatat tempor aliqua laborum dolor. Cupidatat voluptate occaecat minim ad duis incididunt eu aliqua cillum non exercitation voluptate aliqua eu. Adipisicing laboris qui ex est labore do dolor nulla enim. Qui et veniam fugiat enim fugiat occaecat. Fugiat magna reprehenderit ut reprehenderit exercitation. Minim ipsum cupidatat Lorem id et ad labore qui cupidatat anim nostrud. Officia esse ea sunt proident magna qui officia veniam. Irure aliqua sunt eu consectetur cillum sint nulla reprehenderit anim. Consequat labore duis ut velit exercitation adipisicing voluptate sit irure enim consectetur ex.Ad cupidatat ut veniam esse ut. In anim sit nisi enim id esse laborum proident aliquip est sunt pariatur qui. Labore officia occaecat dolor excepteur tempor ipsum consequat voluptate sint. Ea nostrud ad mollit cillum occaecat.</p>
        <div className='WhatWedo'>
        <h1>What we do</h1>
        <p>Sit ullamco do nostrud aliquip nisi voluptate duis minim tempor. Laboris voluptate nostrud elit eu velit minim culpa nisi proident id est excepteur aliqua adipisicing. Do commodo sint laborum magna pariatur. Velit excepteur sunt fugiat fugiat aliqua.Est excepteur Lorem sit nulla ut cillum amet. Dolor laboris nisi Lorem adipisicing elit dolor aliquip magna sit consectetur mollit eu ullamco. Tempor labore proident amet cillum reprehenderit proident proident fugiat adipisicing. Occaecat ullamco pariatur id cillum id quis velit aliqua ipsum tempor minim ad consequat.Ut amet adipisicing cillum anim minim. Proident ullamco eu pariatur elit officia commodo. Commodo deserunt do ut nostrud eu officia in occaecat ipsum sunt. Eiusmod nisi reprehenderit elit occaecat cupidatat fugiat est magna et occaecat occaecat deserunt. Cupidatat culpa officia duis ullamco voluptate ipsum.</p>
        </div>
      </div>
      
    </section>
   
   
  </div>
  )
}

export default AboutUsone
