import React from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'
import { login } from '../../actions/auth';



const LoginForm = (isAuthenticated,{login}) => {
  const navigate=useNavigate()
const [Credentials,setCredentials]=React.useState(
    {
      Email:"",
      Password:""
    }
  )
  function handelChange(e){
    const newdata={...Credentials}
newdata[e.target.id]=e.target.value
setCredentials(newdata)
console.log(Credentials)
  }
  const{Email,Password}=Credentials
  function submit(e){
    console.log("submittted!!!!")
    e.preventDefault();

    login(Email,Password)
    }
    console.log(isAuthenticated)
    isAuthenticated ? navigate('/AdminDashBoard'): console.log('not authenticated')
  return (
    <div>
 
    <div className='LoginForm'>
      <form onSubmit={(e)=>submit(e)}>
        <p>Email</p>
        <input type="text"
       
        onChange={(e)=>handelChange(e)}
        id='Email'
        value={Credentials.Email}
        ></input>
        <br>
        </br>
        <p>Password</p>
        <input type="password"
       
        onChange={(e)=>handelChange(e)}
        id='Password'
        value={Credentials.Password}
        ></input>
     <button type='submit'>submit</button>
      </form>
    </div>
    </div>
  )
}
const mapStatetoProps = State =>({
  isAuthenticated:State.auth.isAuthenticated
})
export default connect(mapStatetoProps,{login})(LoginForm)
