import React from 'react'
import Packages1 from './Packages1'
import Packages2 from './Packages2'
import { Button, Paper, TextField } from '@mui/material'


function Packages() {
    console.log('hello there why isnt the other showing?')
  return (
    <div className='Packages'>
      <div>

      
        <div className='innerPackages'>
      <div style={{width: 497, height: 141, color: 'black', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Packages</div>
        <Packages1/>
        <Packages2/>
        </div>
        </div>
    </div>
  )
}

export default Packages
