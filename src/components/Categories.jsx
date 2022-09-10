import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { categoriesThunk } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);

  useEffect(() => {
    categoriesThunk();
  }, [categories]);

  return (
    <>
      <div className="categories">
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
      </div>
    </>
  );
};

export default Categories;
