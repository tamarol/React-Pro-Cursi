import { ChangeEvent, useState } from "react";

export const useForm = <T>(initState:T) =>{
    const [FormData, SetFormData] = useState(initState);

    const onChange = 
    (e:ChangeEvent<HTMLInputElement>) =>{
        console.log(e)
        SetFormData(anterior =>({
            ...anterior,
        [e.target.name]: e.target.value
        }))
    }

    const resetForm = () =>{
        SetFormData({...initState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    

    return {
        ...FormData,
        FormData,
            
        
        isValidEmail,
        onChange,
        resetForm
    }
}