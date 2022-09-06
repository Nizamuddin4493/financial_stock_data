import React from 'react';
import Header from './Header';
import SearchForm from './SearchForm';

function HomePage() {
  return (
    <>
      <div className="homePageDesign">
        <Header />
        <hr />
        <SearchForm />
      </div>
    </>
  )
}

export default HomePage;
