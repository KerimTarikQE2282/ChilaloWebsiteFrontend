import React from 'react'
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import axios from 'axios';
function DetailedComment({Comment}) {
    console.log(Comment)
    axios.get(`http://localhost:8000/api/comments/${Comment.id}/update_Inspect_status/`)
  return (
    <div className='DetailedComment'>
      <Paper elevation={10}>
      <div style={{width: 527, height: 100, color: 'black', fontSize: 48, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>{`Comment by ${Comment.FirstName} ${Comment.LastName}`} </div>
<div style={{width: 1043, height: 347, color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{Comment.Issue}</div>
<div style={{width: 407, height: 78, color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>{Comment.Phone}<br/>{Comment.Email}</div>
      </Paper>  
      
    </div>
  )
}
const mapStatetoProps = State =>({
  Comment:State.VacationReducer.selectedVacation
})
export default connect (mapStatetoProps)(DetailedComment)
