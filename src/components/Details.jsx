import React from 'react';
import { Link } from 'react-router-dom';
import stock_image from './images/stock-market.jpg'

const Details = () => (
  <>
    <div>
      <div className="detals">
      <Link to="/" className="router_link"><h3 className="details_back_arrow"> &#8617; Back</h3></Link>
        <h2>NasDaq</h2>
        <div className="details_data">
          <div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
          </div>
          <div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
          </div>
          <div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
            <div className="details_info"><h4>NasDaq:</h4><p>1275721002015</p></div>
          </div>
        </div>
        <img src={ stock_image } alt="Share Exchange" />
      </div>
    </div>
  </>
);


export default Details;