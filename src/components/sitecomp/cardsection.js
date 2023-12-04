import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../uicomp/button';
import { cartSignal } from "../signals";

const CardCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  function AddToCart(product){
    const prod = cartSignal.value.find( p => p.id === product.id );
    if( prod ){
        prod.count++;
        cartSignal.value = [...cartSignal.value];
    }else{
        cartSignal.value = [...cartSignal.value, {...product, count: 1}];
    }
}




  return (
    <div className="card-collection">
      {products.map((product, index) => (
        <div key={index} className="card">
          <h2>{product.productName}</h2>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <Button onClick={() => AddToCart(product)} label="Add to cart" />
          
        </div>
      ))}
    </div>


  );
};

export default CardCollection;