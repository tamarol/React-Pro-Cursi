import React, { useState } from 'react'
import { Product,ProductInCart } from '../intefaces/interfaces';

const useShoppingCart = () => {
    const [shoppingCart,  setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product}:{count:number, product:Product}) =>{
      console.log('onProductCountChange',count,product);
      setShoppingCart( oldshoppingCart => {
        if(count === 0){
          const { [product.id]:toDelete, ...rest } = oldshoppingCart;
          return rest
        }
  
        return{
          ...oldshoppingCart,
          [ product.id ]: {...product, count}
        }
      })
    }
  return{
    onProductCountChange,
    shoppingCart
  }
}

export default useShoppingCart