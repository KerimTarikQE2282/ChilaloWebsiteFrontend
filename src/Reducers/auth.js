import {
 LOGIN_SUCCESS,
 LOGIN_FAIL,
 LOAD_USER_SUCCESS,
 LOAD_USER_FAIL
} from '../actions/types'



const initialState={
    access:localStorage.getItem('access'),
    refresh:localStorage.getItem('refresh'),
    isAuthenticated:null,
    user:null
}

export default function(state=initialState,action){
    const {type,payload}=action

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access)
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return{
                ...state,
                access:null,
                isAuthenticated:false,
                user:null,
                refresh:null
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case LOAD_USER_FAIL:
            return{
                ...state,
                user:null
            }
        default:
            return{
                initialState
            }
    }
}