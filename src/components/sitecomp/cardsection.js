import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { cartSignal } from "../signals";
import { useParams } from 'react-router-dom';


const CardCollection = () => {
  const [products, setProducts] = useState([]);

  const {category} = useParams();
  console.log(category);

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
<<<<<<< Updated upstream
          
          <Button onClick={() => AddToCart(product)} label="Add to cart" />
=======
          <button onClick={() => AddToCart(product, quantities[product.id] || 1)} label="Add to cart" /> 
          <button onClick={() => handleDecrement(product)}>-</button>
          <form>
            <input value={quantities[product.id] || 1} readOnly></input>
          </form>
			    <button onClick={() => handleIncrement(product)}>+</button>
  
          
>>>>>>> Stashed changes
          
        </div>
      ))}
    </div>


  );
};

export default CardCollection;