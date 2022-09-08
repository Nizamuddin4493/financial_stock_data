import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoriesThunk } from '../redux/categories/categories';
// import stockImage from './images/stock-market.jpg';
// import Card from './Card';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);
  console.log(categories);
  useEffect(() => {
    categoriesThunk();
  }, [categories]);

  return (
    <>
      <div className="categories">
        <Link to="/Details" className="router_link">
          {categories.map((data) => (
            <Card
              symbol={data.symbol}
              name={data.name}
              price={data.price}
              changesPercentage={data.changesPercentage}
            /> 
          ))}
        </Link>
      </div>
    </>
  );
};

export default Categories;
