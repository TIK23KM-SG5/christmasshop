import React from 'react'
import { cartSignal } from './signals';

export const Cart = () => {
      
        return(
            <div>
                <h2>Products in the cart</h2>
                <button onClick={()=> cartSignal.value = []}>Empty cart</button>
                <ul>
                    { cartSignal.value.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName}</li>)}
                </ul>
            </div>
        );
    }

    
  

