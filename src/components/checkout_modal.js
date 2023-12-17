// Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const OrderModal = ({ isOpen, closeModal, orderDetails }) => {
    const customStyles = {
        content: {
          width: '40%', // Adjust the width as needed
          margin: 'auto',
          height: '40%', // Set maxHeight to '100%' for dynamic adjustment without scrollbar
          overflow: 'hidden', // Hide the scrollbar
        },
      };

   // Calculate total price for each product and overall total
   const totalForProduct = (product) => product.price * product.count;
   const overallTotal = orderDetails.reduce((total, product) => total + totalForProduct(product), 0);
 
   return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Order Details"
      style={customStyles}
    >
      <h2>Order Details</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.count}</td>
              <td>{totalForProduct(product).toFixed(2)}€</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <b>Overall Total: {overallTotal.toFixed(2)}€</b>
      </p>
      <button onClick={closeModal}>Continue shopping</button>
    </Modal>
      );
    };


export default OrderModal;
