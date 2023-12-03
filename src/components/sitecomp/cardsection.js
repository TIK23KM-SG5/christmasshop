import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../uicomp/button';

const CardCollection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="card-collection">
      {products.map((product, index) => (
        <div key={index} className="card">
          <h2>{product.productName}</h2>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <Button onClick={() => console.log("Jee")} label="Card button" />
        </div>
      ))}
    </div>
  );
};

export default CardCollection;