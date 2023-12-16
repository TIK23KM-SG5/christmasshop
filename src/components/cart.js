import React, { useState } from 'react'
import { cartSignal } from './signals';
import OrderModal from './checkout_modal'; 
import Button from './uicomp/button'


export const Cart = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
      // Removes product amount by 1 from cart and stops to 1
    const removeFromCart = (product) => {
        const updatedCart = cartSignal.value.map(p => ({ ...p })); // Create a new array with cloned objects
    
        const index = updatedCart.findIndex(p => p.id === product.id);
    
        if (index !== -1) {
            const updatedProduct = { ...updatedCart[index] };
    
            if (updatedProduct.count > 1) {
                updatedProduct.count--;
            } else {
                // Stop the count at 1
                updatedProduct.count = 1;
            }
    
            // Update the product in the array
            updatedCart[index] = updatedProduct;
    
            cartSignal.value = updatedCart;
        }
    };
      // Removes product from cart
    const removeProductFromCart = (product) => {
        const updatedCart = cartSignal.value.filter(p => p.id !== product.id);
        cartSignal.value = updatedCart;
    };

    

    // Add to cart. 
    function AddToCart(product){
        const prod = cartSignal.value.find( p => p.id === product.id );
        if( prod ){
            prod.count++;
            cartSignal.value = [...cartSignal.value];
        }else{
            cartSignal.value = [...cartSignal.value, {...product, count: 1}];
        }
    };
  

    return (
        <div>
          <h2>Products in the cart</h2>
          <button onClick={() => (cartSignal.value = [])}>Empty cart</button>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartSignal.value.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.productName}
                  </td>
                  <td>
                  <button className='cartButton' onClick={() => removeFromCart(product)}>-</button>
                    {product.count}
                    <button className='cartButton' onClick={() => AddToCart(product)}>+</button>
                  </td>
                  <td>{(product.price * product.count).toFixed(2)}€</td>
                  <td>
                    <Button onClick={() => removeProductFromCart(product)} label="Remove from cart" />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3"></td>
                <td>
                  <b>Total: </b>
                  {cartSignal.value
                    .reduce((total, product) => total + product.price * product.count, 0)
                    .toFixed(2)}
                  €
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
          <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>

      {/* Render the OrderModal component */}
      <OrderModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        orderDetails={cartSignal.value}
      />
        </div>
      );
      


        

        }
    
