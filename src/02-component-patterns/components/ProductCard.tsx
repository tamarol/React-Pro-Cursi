import styles from '../styles/styles.module.css'

import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, onChangeArgs, Product, InitialValues, ProductCardHandlers } from '../intefaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props{
  product:Product;
  // children?:ReactElement | ReactElement[];
  children: (args: ProductCardHandlers)=> JSX.Element,
  className?:string;
  style?:React.CSSProperties;
  onChange?: ( args: onChangeArgs) => void;
  value?:number;
  initialValues?:InitialValues
}

export const ProductCard = ({product,children,className,style,onChange,value,initialValues}:Props) => {
    const {counter,incrementar,maxCount,isMaxCountReached,reset} = useProduct( {onChange, product ,value,initialValues} );

  return (
    <Provider value={{counter,incrementar,maxCount,product}}>
    <div className={`${styles.productCard} ${className}`}style={style} >
        { children({
          count:counter,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy:incrementar,
          reset:reset,
        }) }
    </div>
    </Provider>
  )
}
