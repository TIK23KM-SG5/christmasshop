import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../uicomp/button';
import { cartSignal } from "../signals";
import { useParams } from 'react-router-dom';


const CardCollection = () => {
  const [products, setProducts] = useState([]);

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
  }, [category]);

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
          
          <Button onClick={() => AddToCart(product)} label="Add to cart" />
          
        </div>
      ))}
    </div>


  );
};

export default CardCollection;