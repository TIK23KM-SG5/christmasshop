import axios from "axios";
import { useEffect, useState } from "react";
import { cartSignal } from "./signals";


/**
 * Simple example component for fetching and printing the products and
 * adding selected to the cart.
 */
export default function CartExample(){
    return(
        <div>
            <ProductList/>   
            <CartProductList/>    
        </div>
    )
}

function ProductList(){

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('/products')
            .then((resp)=>{
                setProducts(resp.data);
            })
            .catch (error => {
                console.log(error.message);
            })
    },[]);

    //Adds/updates product into the cart
    function updateProductCart(product){
        const prod = cartSignal.value.find( p => p.id === product.id );
        if( prod ){
            prod.count++;
            cartSignal.value = [...cartSignal.value];
        }else{
            cartSignal.value = [...cartSignal.value, {...product, count: 1}];
        }
    }

    return(
        <div>
            <h2>All the products</h2>
            <ul>
                { products.map(product => 
                    <li key={product.id}>
                        <button onClick={ () => updateProductCart(product) }>{product.productName}</button>
                    </li>) 
                }
            </ul>
        </div>
    );
}

function CartProductList(){
    return(
        <div>
            <h2>Products in the cart</h2>
            <button onClick={()=> cartSignal.value = []}>Empty cart</button>
            <ul>
                { cartSignal.value.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName}</li>) }
            </ul>
        </div>
    );
}