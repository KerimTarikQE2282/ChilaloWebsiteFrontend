const initialState={
    vacation:null,
    vacationCreateStatus:null,
    vacationList:[],
    vacationGet:null,
    selectedVacation:null,
    vacationDelete:null
}


export default function VacationReducer(state=initialState,action){

    const {payload,type}=action
    
    switch(type){
        case 'VacationCreateSuccess':
            return{
                ...state,
                vacation:payload.data,
                vacationCreateStatus:true
            }
        case 'VacationCreateFail':
            return{
                ...state,
                vacationCreateStatus:false
            }
        case 'GETVACATIONSUCCESS':
            return{
                ...state,
                vacationList:payload,
                vacationGet:true
            }
        case 'GETVACATIONFAIL':
            return {
                ...state,
                vacationGet:false
            }
        case 'selectVacation':
            
            return{
                ...state,
                selectedVacation:payload
            }
        case 'REMOVEVACATIONSUCCESS':
            
            return{
                ...state,
                vacationDelete:true
            }
        case 'REMOVEVACATIONFAIL':
            
            return{
                ...state,
                vacationDelete:false
            }
            

    default:
        return state
    
    };

} 