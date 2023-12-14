import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:3001/categories')
      .then(response => setCategory(response.data))
      .catch(error => console.error(error));
  }, []);



  return (
    <div className="card-collection">
      {category.map((cat, index) => (
        <div key={index} className="card">
          <Link to={"/products/" + cat.categoryName}>
            <h2>{cat.categoryName}</h2>
          </Link>

          
        </div>
      ))}
    </div>


  );
};

export default Category;