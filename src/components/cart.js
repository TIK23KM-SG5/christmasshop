import React, { useState } from 'react'
import { cartSignal } from './signals';
import OrderModal from './checkout_modal';
import Button from './uicomp/button'
import { jwtToken } from './Signals/TokenSignal';


export const Cart = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitOrderToBackend = async (orderDetails) => {
    try {
      const authToken = jwtToken.value;

        // Decode the JWT token to get the customer ID
         const decodedToken = decodeToken(authToken);

        // Check if decoding was successful and the customer ID is available
        if (!decodedToken || !decodedToken.customerId) {
        throw new Error('Customer ID not found in the token');
        }
         const customerId = decodedToken ? decodedToken.customerId : null;
   

      // Make a request to your backend to create the order
      const response = await fetch('http://localhost:3001/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`, // Include your authorization token
        },
        body: JSON.stringify({
          customerId: customerId, // Use the customer ID obtained from the token
          products: orderDetails,
        }), // Send order details in the request body
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      // Handle the response as needed
      const data = await response.json();
      console.log('Order created successfully:', data);
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle errors as needed
      throw error; // Propagate the error to the calling component if necessary
    }
  };

    // Function to decode the JWT token
    const decodeToken = (token) => {
      try {
        if (!token) {
          console.error('Token is null or undefined');
          return null;
        }

        const [, payloadBase64] = token.split('.'); // Extract the payload part
        const decodedString = window.atob(payloadBase64);
        const decodedObject = JSON.parse(decodedString);
        console.log('Decoded Token:', decodedObject);
        return decodedObject;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    };

    const handleCheckout = () => {
      setIsModalOpen(true);
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
            {cartSignal.value.length === 0 ? (
              <p>Shopping cart is empty</p>
            ) : (
            <table className='cartTable'>
            <thead>
              <tr>
                <td>
                <h2>Products in the cart</h2>
                </td>
              </tr>
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
              <tr>
                <td>
                <button onClick={handleCheckout}>Checkout</button> <button onClick={() => (cartSignal.value = [])}>Empty cart</button>
                </td>
              </tr>
            </tfoot>
          </table>
          )}
          <div>
        
      </div>

      {/* Render the OrderModal component */}
      <OrderModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        orderDetails={cartSignal.value}
        onSubmitOrder={submitOrderToBackend}
      />
        </div>
      );
        
      


        
}
