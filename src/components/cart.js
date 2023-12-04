import React from 'react'
import { cartSignal } from './signals';
import Button from './uicomp/button';

export const Cart = () => {
 
    function RemoveFromCart(product){
        const prod = cartSignal.value.find( p => p.id === product.id );
        if( prod ){
            prod.count--;
            cartSignal.value = [...cartSignal.value];
        }else{
            cartSignal.value = [...cartSignal.value, {...product, count: 1}];
        }
      }
        return(
            <div>
                <h2>Products in the cart</h2>
                <button onClick={()=> cartSignal.value = []}>Empty cart</button>
                <ul>
                    { cartSignal.value.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName} <Button onClick={() => RemoveFromCart(product)} label="Remove from cart" /></li>)} 
                </ul>
            </div>
        );
    }

    
  

