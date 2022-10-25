import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'
import { json } from 'stream/consumers';
import { products } from '../data/products';

const product = products[0]



export const ShoppingPage = () => {

  return (
    <div >
        <h1>Shopping Page</h1>
        <hr />
            <ProductCard 
               key={product.id}
              product={product}
              className="bg-dark text-white"
              initialValues={{
                count: 4,
                maxCount:10
              }}
              >
                {
                  ({count,increaseBy,isMaxCountReached,maxCount,product,reset})=>(
                    <>
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white text-bold"/>
                    <ProductButtons className="custom-buttons" />
                    <button onClick={reset}>reset</button>
                    <button onClick={()=>increaseBy(2)} hidden={isMaxCountReached ? true : false}>+2</button>
                    <button onClick={()=>increaseBy(-2)}>-2</button>
                    <span>{count}</span>
                  {/* {JSON.stringify(args,null,3)} */}
                    </>
                  )
                }
            
            </ProductCard > 
        </div>
  )
}
