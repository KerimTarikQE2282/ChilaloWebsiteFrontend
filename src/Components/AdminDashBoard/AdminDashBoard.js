import React from 'react'
import { Drawer, Typography } from '@mui/material'
import {Paper, makeStyles} from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveIcon from '@mui/icons-material/Remove';
import CommentIcon from '@mui/icons-material/Comment';
import BamlackIMg from '../../Resources/BamlackPP.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AdminDashBoard = () => {
  console.log('admin dash board')
  const navigate=useNavigate()
 
  return (
    <div className='Admindashboard'>
      <div className='AdminDashBoardHeader'> 
      <img
      src={BamlackIMg}
      ></img>
      <h2>Welcome Bamlack</h2>
      <h1>Admin DashBoard</h1>
      </div>
      <div className='AdminBody'>
      <Paper className='AddPackage' onClick={()=>{navigate('/AddEvent')}}>
      <AddIcon/>
      <h3>Add package</h3>
      </Paper>
      <Paper className='EditPackage' onClick={()=>{navigate('/AllPackagesModifier')}}>
      <EditIcon/>
      <h3>Edit package</h3>
      </Paper>
      <Paper className='RemovePackage' onClick={()=>{navigate('/AllPackagesModifier')}}>
      
      <RemoveIcon/>
      <br/>
      <h3>Remove package</h3>
      </Paper>
      <Paper className='ViewComments' onClick={()=>{navigate('/ViewComments')}}>
      <CommentIcon/>
      <h3>
        view Comments
      </h3>
      </Paper>
      </div>
      
    </div>
  )
}

export default AdminDashBoard
