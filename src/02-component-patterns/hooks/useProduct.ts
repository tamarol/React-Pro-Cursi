import { useEffect, useState, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../intefaces/interfaces';

interface useProductArgs{
    product:Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?:number;
    initialValues?:InitialValues
}

export const useProduct = ({onChange,product,value=0,initialValues}:useProductArgs) => {
    const [counter,setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false);
        
    const incrementar = (value:number) => {

        let NewValue = Math.max(counter + value,0)
        if(initialValues?.maxCount){
            NewValue =  Math.min(NewValue,initialValues.maxCount)
        }
        setCounter(NewValue);
        onChange && onChange({count: NewValue, product});
    }
    const reset = () =>{
        setCounter(initialValues?.count || value)
    }


    useEffect(() => {
      if(!isMounted.current) return;
      setCounter(value)
    }, [value])


    return {
        counter,
        incrementar,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount

    }
}
