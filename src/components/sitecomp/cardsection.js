import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../uicomp/button';
import { cartSignal } from "../signals";
import { useParams } from 'react-router-dom';






const CardCollection = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
 
  
  useEffect(() => {
    // Set default quantity value for each product
    const defaultQuantities = {};
    products.forEach((product) => {
      defaultQuantities[product.id] = 1;
    });
    setQuantities(defaultQuantities);
  }, [products]);


  const {category} = useParams();
  

  useEffect(() => {
    // Fetch products when the component mounts
    let url = 'http://localhost:3001/products';

    if(category) {
      url = url + '?category=' + category;
    }

    axios.get(url)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  function AddToCart(product){
    
    const quantity = quantities[product.id] || 1;
    const prod = cartSignal.value.find( p => p.id === product.id );
    if( prod ){
        prod.count += quantity;
        cartSignal.value = [...cartSignal.value];
    }else{
        cartSignal.value = [...cartSignal.value, {...product, count: quantity}];
    }
};

function handleDecrement(product) {
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [product.id]: Math.max((prevQuantities[product.id] || 1) - 1, 1)
  }));
}

function handleIncrement(product) {
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [product.id]: (prevQuantities[product.id] || 0) + 1
  }));
}

function handleChange(event, product) {
  const newValue = event.target.value;
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [product.id]: Number(newValue) || 0
  }));
}

function handleClearField(product) {
  
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: '',
    }));
  }









  return (
    <div className="card-collection">
      {products.map((product, index) => (
        <div key={index} className="card">
          <h2>{product.productName}</h2>
          <p>{product.price}€</p>
          
          <Button onClick={() => AddToCart(product)} label="Add to cart" /> 
          <div className="card-buttons">
          <button className='cartButton' onClick={() => handleDecrement(product)}>-</button>
          <form>
            <input 
            class="amountForm"
            type="number"
            value={quantities[product.id] || ''}
            onChange={(event) => handleChange(event, product)}
            onKeyDown={(event) => {
              if (event.key === 'Backspace') {
                event.preventDefault();
                handleClearField(product);
              }
            }} 
            />
          </form>
			    <button className='cartButton' onClick={() => handleIncrement(product)}>+</button>
            </div>
          
          
        </div>
      ))}

    

    </div>



  );
}

export default CardCollection;