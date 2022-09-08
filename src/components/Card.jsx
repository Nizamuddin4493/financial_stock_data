import React from 'react';
import { PropTypes } from 'prop-types';
// import stockImage from './images/stock-market.jpg';

const Card = ({
  symbol,
  name,
  image,
  total_volume,
}) => (
  <>
    <div className="card" key={symbol}>
      <h3>{symbol}</h3>
      <h4>
        Name:
        {name}
      </h4>
      <h4>
        price:
        {total_volume}
      </h4>
      <p>
        Change:
        {total_volume}
      </p>
      <img src={image} alt="Share Exchange" />
    </div>
  </>
);

Card.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total_volume: PropTypes.number.isRequired,
  total_volume: PropTypes.number.isRequired,
};

export default Card;