import React, { useState } from 'react';
import { homeDecorProducts } from '../data.js';
import './Home.css';

const Home = () => {
  const [items, setItems] = useState(homeDecorProducts);

  return (
    <div className="product-card">
      {items.map((item, key) => (
        <div key={key} className="product-item">
          <div className="img-div">
            <img src={item.imgUrl} alt={item.productName} />
          </div>
          <div className="product-content">
            <h3>{item.productName}</h3> {/* Ensure this is outside `.img-div` */}
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
