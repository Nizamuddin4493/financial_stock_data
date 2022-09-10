import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categoriesThunk } from '../redux/categories/categories';

const Details = () => {
  const details = useSelector((state) => state.categoriesReducer);

  useEffect(() => {
    categoriesThunk();
  }, [details]);

  const { id } = useParams();

  const detailData = details.filter((item) => item.id === id);

  return (
    <>
      {detailData.map((data) => (
        <div key={data.id}>
          <div className="detals">
            <Link to="/" className="router_link">
              <h3 className="details_back_arrow"> &#8617; Back</h3>
            </Link>
            <h2>{ data.name }</h2>
            <div className="details_data">
              <div>
                <div className="details_info">
                  <h4>Current Price:</h4>
                  <p>{ data.currentPrice }</p>
                </div>
                <div className="details_info">
                  <h4>totalVolume:</h4>
                  <p>{ data.currentPrice }</p>
                </div>
                <div className="details_info">
                  <h4>High 24h:</h4>
                  <p>{ data.high24h }</p>
                </div>
              </div>
              <div>
                <div className="details_info">
                  <h4>Low 24h:</h4>
                  <p>{ data.low24h }</p>
                </div>
                <div className="details_info">
                  <h4>Price Change 24h:</h4>
                  <p>{ data.priceChange24h }</p>
                </div>
                <div className="details_info">
                  <h4>Market Cap Change 24h:</h4>
                  <p>{ data.marketCapChange24h }</p>
                </div>
              </div>
              <div>
                <div className="details_info">
                  <h4>Total Supply:</h4>
                  <p>{ data.totalSupply }</p>
                </div>
                <div className="details_info">
                  <h4>Atl Change Percentage:</h4>
                  <p>{ data.atlChangePercentage }</p>
                </div>
                <div className="details_info">
                  <h4>Last Updated:</h4>
                  <p>{ data.lastUpdated }</p>
                </div>
              </div>
            </div>
            <img src={data.image} alt="Share Exchange" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;
