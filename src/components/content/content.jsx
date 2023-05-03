import React, { useState } from 'react';
import List from '../list/list';
import Card from '../card/card';
import './Content.css';

function Content() {
  const [bestSeller, setBestSeller] = useState(null);

  const data = [
    { id: 1, name: 'Phone', model: 'iphone 14', price: 10, brand: 'Apple' },
    { id: 2, name: 'Phone', model: 'iphone 12 pro', price: 20, brand: 'Apple' },
    { id: 3, name: 'Notebook', model: 'Macbook pro', price: 30, brand: 'Apple' },
    { id: 4, name: 'Notebook', model: 'Macbook air', price: 40, brand: 'Apple' },
  ];
  
  const handleClick = (id) => {
    setBestSeller(id);
  };

  const resetBestSeller = () => {
    setBestSeller(null);
  };

  return (
    <main>
      <h1>Welcome to our online store!</h1>
      <List data={data} onClick={handleClick} />
      {bestSeller && (
        <p className="best-seller" onClick={resetBestSeller}>
          Best Seller: {data.find((p) => p.id === bestSeller).model}
        </p>
      )}
    </main>
  );
}

export default Content;