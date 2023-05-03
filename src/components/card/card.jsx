import React from 'react';
import './Card.css';

function Card({ product, onClick }) {
  return (
    <div className="card" onClick={() => onClick(product.id)}>
      <p>{product.brand}</p>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.model}</p>
    </div>
  );
}

export default Card;
