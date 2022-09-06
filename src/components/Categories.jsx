import React from 'react';
import { Link } from 'react-router-dom';
import stock_image from './images/stock-market.jpg';

const Categories = () => (
  <>
    <div className="categories">
      <Link to="/Details" className="router_link">
        <div className="card">
          <h3>NasDaq</h3>
          <h4>TotalInvested: 1275721002015</h4>
          <p>Date: 6/9/2022</p>
          <img src={ stock_image } alt="Share Exchange" />
        </div>
      </Link>
      <div className="card">
        <h3>NasDaq</h3>
        <h4>TotalInvested: 1275721002015</h4>
        <p>Date: 6/9/2022</p>
        <img src={ stock_image } alt="Share Exchange" />
      </div>
      <div className="card">
        <h3>NasDaq</h3>
        <h4>TotalInvested: 1275721002015</h4>
        <p>Date: 6/9/2022</p>
        <img src={ stock_image } alt="Share Exchange" />
      </div>
    </div>
  </>
)

export default Categories;
