import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='firstNameh1'>      <h1 >Contact us</h1>
      <p style={{color:'#c0b6b6'}}>send us a message</p>
        <input
        placeholder='Full name'
        ></input>
        <br/>
        <input
        placeholder='email'
        ></input>
        <br/>
        <textarea
        placeholder='comments'
        >
        </textarea>
      <br/>
        <Button
        variant='contained'
        style={{ backgroundColor: '#756a64', color: 'white',height:'3vh' }}
        >Submit</Button>
</div>
<div>
  <h1 className='secondNameh1'>site map</h1>
  <p>All our pages</p>
 <p>- Home</p>
 <p>- Home</p>
 <p>- Home</p>
 <p>- Home</p>
 <p>- Home</p>
</div>
<div className='thirdNameh1'>
<h1 to="#" className='brand'>Travel</h1>
<p>some thing...</p>
<p>some thing...</p>
<p>some thing...</p>
<p>some thing...</p>
</div>
    </div>
  )
}

export default Footer
