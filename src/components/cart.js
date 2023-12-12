import React from 'react'
import { cartSignal } from './signals';
import Button from './uicomp/button';

export const Cart = () => {
 
    /*function RemoveFromCart(product){
   
     
        const prod = cartSignal.value.find( p => p.id === product.id );
        if( prod ) 
        {   
            if ( prod.count > 0) {
            
            prod.count--;
            cartSignal.value = [...cartSignal.value];
        }
        
        else
        {
            cartSignal.value = [...cartSignal.value];
        }
      }*/

      const removeFromCart = (product) => {
        const updatedCart = cartSignal.value.map(p => ({ ...p })); // Create a new array with cloned objects
 
        const index = updatedCart.findIndex(p => p.id === product.id);
 
        if (index !== -1) {
            const updatedProduct = { ...updatedCart[index] };
 
            if (updatedProduct.count > 0) {
                updatedProduct.count--;
 
                if (updatedProduct.count === 0) {
                    // Remove the product from the cart if count becomes 0
                    updatedCart.splice(index, 1);
                } else {
                    // Update the product in the array
                    updatedCart[index] = updatedProduct;
                }
            }
 
            cartSignal.value = updatedCart;
        }
    };


    

    
    function AddToCart(product){
        const prod = cartSignal.value.find( p => p.id === product.id );
        if( prod ){
            prod.count++;
            cartSignal.value = [...cartSignal.value];
        }else{
            cartSignal.value = [...cartSignal.value, {...product, count: 1}];
        }
    };
  



        return(
            <div>
                <h2>Products in the cart</h2>
                <button onClick={()=> cartSignal.value = []}>Empty cart</button>
                <ul>
                    { cartSignal.value.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName} <Button onClick={() => removeFromCart(product)} label="-" /> <Button onClick={() => AddToCart(product)} label="+"/> </li>)} 
                </ul>
            </div>
        );
        

        }
    
