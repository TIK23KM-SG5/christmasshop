import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../uicomp/button';
import { cartSignal } from "../signals";
import { useParams } from 'react-router-dom';




const CardCollection = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

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

  function AddToCart(product, quantity){
    const prod = cartSignal.value.find( p => p.id === product.id );
    if( prod ){
        prod.count++;
        cartSignal.value = [...cartSignal.value];
    }else{
        cartSignal.value = [...cartSignal.value, {...product, count: quantity}];
    }
};

function handleDecrement(product) {
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [product.id]: Math.max((prevQuantities[product.id] || 0) - 1, 0)
  }));
}

function handleIncrement(product) {
  setQuantities(prevQuantities => ({
    ...prevQuantities,
    [product.id]: (prevQuantities[product.id] || 0) + 1
  }));
}




	/*const [value, setValue] = useState(1);
  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1));
  };*/




  return (
    <div className="card-collection">
      {products.map((product, index) => (
        <div key={index} className="card">
          <h2>{product.productName}</h2>
          <p>{product.price}</p>
          
          <Button onClick={() => AddToCart(product, quantities[product.id] || 1)} label="Add to cart" /> 
          <button onClick={() => handleDecrement(product)}>-</button>
          <form>
            <input value={quantities[product.id] || 1} readOnly></input>
          </form>
			    <button onClick={() => handleIncrement(product)}>+</button>
  
          
          
        </div>
      ))}
    </div>


  );
      }

export default CardCollection;