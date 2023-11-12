import React from 'react'
import image from '../../Resources/image 12.png'
import star from '../../Resources/Star 1.png'
import { useQuery } from 'react-query'
import axios from 'axios';
const fetchPackages=()=>{
  return axios.get('http://localhost:8000/api/Vacation/')
}
function Packages1() {
 const {isLoading,data}=useQuery('packagesFetcher',fetchPackages)
const vacations=data?.data.map(prev=>{
  return(
    <div>
    <div className='Card'>
    <img src={`http://127.0.0.1:8000${prev.VacactionImage}`} className='CardImg'></img>
    <br/>
    
</div>
<div className='CardSections'>
     <div className='cardFirstSection'>
    <div><img src={star} className='Star'/></div>
    <div style={{width: 18, height: 14, color: '#222222', fontSize: 15, fontFamily: 'Poppins', fontWeight: '300'}}>5.0</div>
<div style={{width: 18, height: 14, color: '#918E9B', fontSize: 15, fontFamily: 'Poppins', fontWeight: '300'}}>({prev.id})</div>
<div style={{width: 23, height: 14, color: '#918E9B', fontSize: 15, fontFamily: 'Poppins', fontWeight: '300'}}>{prev.VacationPlace}</div>
</div>
<div className='cardSecondSection'>
<div style={{width: 300, height: 14, color: '#222222', fontSize: 18, fontFamily: 'Poppins', fontWeight: '300'}}>{prev. VacationDescription}<br/></div>
</div>
<div className='cardThirdSection'>
  <span style={{color: '#222222', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600'}}>From $136 </span>
  <span style={{color: '#222222', fontSize: 20, fontFamily: 'Poppins', fontWeight: '300'}}>/ person<br/></span>
</div>
</div>
</div>

  )
})
console.log(vacations)
  return (
    <div className='PackageType'>
    <div style={{width: 586, height: 41, color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Popular Packages</div>
    
    <div  className='cardsmapped'>{vacations}</div>
    
    </div>
  )
}

export default Packages1
