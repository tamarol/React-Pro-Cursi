import styles from '../styles/styles.module.css'

import { createContext, ReactElement, useContext, useState } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, onChangeArgs, Product } from '../intefaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props{
  product:Product;
  children?:ReactElement | ReactElement[];
  className?:string;
  style?:React.CSSProperties;
  onChange?: ( args: onChangeArgs) => void;
  value?:number
}

export const ProductCard = ({product,children,className,style,onChange,value}:Props) => {
    const {counter,incrementar} = useProduct( {onChange, product ,value} );

  return (
    <Provider value={{counter,incrementar,product}}>
    <div className={`${styles.productCard} ${className}`}style={style} >
        { children }
    </div>
    </Provider>
  )
}
