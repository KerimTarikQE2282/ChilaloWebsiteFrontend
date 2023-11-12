import axios from "axios";


export const AddVacation=(VacationName,VacationPlace,VacationDescription,VacactionImage) =>async dispatch=>{
    
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            
        }
       

}
console.log('reached here')
console.log(VacationName,VacationPlace,VacationDescription,VacactionImage)
const formData=new FormData();
formData.append('VacationName',VacationName);
formData.append('VacationPlace',VacationPlace);
formData.append('VacationDescription',VacationDescription);
formData.append('VacactionImage',VacactionImage);

try {
    const res=await axios.post('http://127.0.0.1:8000/api/Vacation/',formData,config)
    console.log('correctly requested')
    console.log(VacationName,VacationPlace,VacationDescription,VacactionImage)
    dispatch({
        type:'VacationCreateSuccess',
        payload:res.data
    })
}
catch(err){
    console.log(err);
    dispatch({
        type:'VacationCreateFail'
    })
}

}


export const updateVacation=(id,VacationName,VacationPlace,VacationDescription) =>async dispatch=>{
    
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            
        }
       

}
console.log('reached here')
console.log(id,VacationName,VacationPlace,VacationDescription)
const formData=new FormData();
formData.append('VacationName',VacationName);
formData.append('VacationPlace',VacationPlace);
formData.append('VacationDescription',VacationDescription);


try {
    const res=await axios.post(`http://127.0.0.1:8000/api/${id}/UpdateVacation/`,formData,config)
    console.log('correctly requested')
    dispatch({
        type:'VacationUpdateSuccess',
        payload:res.data
    })
}
catch(err){
    console.log(err);
    dispatch({
        type:'VacationUpdateFail'
    })
}

}
export const  GetVacations=()=> async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            
        }
    }
    try{
     const vacationList=await axios.get('http://127.0.0.1:8000/api/Vacation/')
      
      dispatch({
        type:'GETVACATIONSUCCESS',
        payload:vacationList
    })
      
    
      
        }
    catch(err){
            console.log(err);
            dispatch({
                type:'GETVACATIONFAIL'
            })
        }
}

export const  RemoveVacations=(id)=> async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            
        }
    }
    try{
     await axios.delete(`http://127.0.0.1:8000/api/${id}/Remove_Vacation`)
      console.log('done deleting')
      dispatch({
        type:'REMOVEVACATIONSUCCESS',
         })
         }
    catch(err){
            console.log(err);
            dispatch({
                type:'REMOVEVACATIONFAIL'
            })
        }
}
