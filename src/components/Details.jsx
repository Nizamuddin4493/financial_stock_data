import React from 'react';
import stock_image from './images/stock-market.jpg'

const Details = () => (
  <>
    <div>
      <div className="detals">
      <h3 className="details_back_arrow"> &#8617; Back</h3>
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