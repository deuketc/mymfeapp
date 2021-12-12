import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './products.css';

function FetchDataComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  if (products.length === 0) {
    return <h3>Fetching Data...</h3>;
  }

  return (
    <section>
      <h2>Products MFE /products</h2>
      <ul className='products'>
        {products.map((product) => {
          return (
            <li className='products__item' key={product.id}>
              <h3>{product.title}</h3>
              <img className='products__img' src={product.image} />
              <p>{product.description}</p>
              <h4>Price: ${product.price}</h4>
            </li>
          );
        })}
      </ul>
      <Link to='/'>Back</Link>
    </section>
  );
}

export default FetchDataComponent;
