import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props{
    className?:string;
    style?:React.CSSProperties
}

export const ProductButtons = ({className,style}:Props) =>{
    const {incrementar,counter,maxCount} = useContext(ProductContext)
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter,maxCount],
    );
    
    return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={()=>incrementar(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`} onClick={()=>incrementar(+1)}>+</button>
        </div>
    )
}