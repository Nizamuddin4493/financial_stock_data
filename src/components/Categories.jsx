import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { categoriesThunk } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);

=======
import { Link } from 'react-router-dom';
import { categoriesThunk } from '../redux/categories/categories';
// import stockImage from './images/stock-market.jpg';
// import Card from './Card';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);
  console.log(categories);
>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
  useEffect(() => {
    categoriesThunk();
  }, [categories]);

  return (
    <>
      <div className="categories">
<<<<<<< HEAD
        {categories.map((data) => (
          <NavLink to={`/${data.id}`} className="router_link" key={data.id}>
            <div className="card" key={data.id}>
              <h3>{data.id}</h3>
              <h4>
                Name:
                {' '}
                {data.name}
              </h4>
              <p>
                Current Price:
                {' '}
                {data.currentPrice}
              </p>
              <img src={data.image} alt="Share Exchange" />
            </div>
          </NavLink>
        ))}
=======
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
>>>>>>> ed2917d78aa2a66841f2380c05bdf3df05428cb6
      </div>
    </>
  );
};

export default Categories;
