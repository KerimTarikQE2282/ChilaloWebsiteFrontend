import { Button, Paper, TextField } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import axios from 'axios'
function ContactUs() {
    console.log('hello from contact us')
    const [data,setData]=React.useState({})
    const HandleChange = (e) => {
      setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
   const HandleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/Comment/',data)
    console.log('submitted data')
   }
  return (
    <div className='ContactUs'>
      <Paper className='innerContactus'>
      <div className="leftContactus">
      <div style={{ width: '178px', height: '53px', color: 'white', fontSize: '20px', fontFamily: 'Inter', fontWeight: 700, wordWrap: 'break-word' }}>
    TRAVEL
  </div>
  <div style={{ Width: '10vw', height: '144px', color: 'white', fontSize: '12px', fontFamily: 'Inter', fontWeight: 400, wordWrap: 'break-word' }}>
    Chilalo is an exciting tour company that specializes in immersive travel experiences. Explore breathtaking destinations with expert guides, uncovering local cultures and creating unforgettable memories. Let Chilali take you on a thrilling adventure that will ignite your wanderlust.
  </div>
  <div className='contactusicons'>
    <TwitterIcon/>
    <FacebookIcon/>
    <TelegramIcon/>

  </div>
</div>
        <div className='RightContactUs'>
    <div style={{ width: '263px', height: '40px', color: 'black', fontSize: '36px', fontFamily: 'Inter', fontWeight: 700, lineHeight: '50px', wordWrap: 'break-word' }}>GET IN TOUCH</div>
    <div style={{ maxwidth: '30vw', height: '48px', color: '#939393', fontSize: '15px', fontFamily: 'Inter', fontWeight: 500, marginTop:'2vh', wordWrap: 'break-word' }}>24/7 we will answer your questions and problems</div>
        <form onSubmit={HandleSubmit}>
            <TextField placeholder='First Name'
            name='FirstName'
            onChange={HandleChange}
            > 

            </TextField>
            <TextField placeholder='Last Name' className='LastnameInput'
            name='LastName'
            onChange={HandleChange}
            >  

</TextField>
<br/>
<TextField placeholder='Email'
name='Email'
onChange={HandleChange}
> 

</TextField>
<br/>
<TextField placeholder='Phone'
name='Phone'
onChange={HandleChange}
> 

</TextField>
<br/>
<TextField placeholder='Describe Your Issue'
 multiline
 rows={4}
 name='Issue'
 onChange={HandleChange}
> 

</TextField>
<br/>
<Button
variant="contained"
type='submit'
>Submit</Button>
        </form>
</div>
      </Paper>
    </div>
  )
}

export default ContactUs
