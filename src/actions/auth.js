import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL
   } from './types'

   export const load_user = () => async dispatch => {
    
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }; 
        console.log(config)
        try {
            const res = await axios.get(`http://localhost:8000/auth/users/me/`, config);
    
            dispatch({
                type:LOAD_USER_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: LOAD_USER_FAIL
            });
        }
    } else {
        dispatch({
            type: LOAD_USER_FAIL
        });
    }
};
export const login=(email,password) =>async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });
    try{
        const res=await axios.post('http://localhost:8000/auth/jwt/create/',body,config)
        dispatch({
           type:LOGIN_SUCCESS,
           payload:res.data 
        })
        dispatch(load_user())
    }
    catch(err){
        console.log(err)
        dispatch({
            type:LOGIN_FAIL,
           
         })
    }
   };