import React from 'react';
import Categories from './Categories';
import Header from './Header';
import SearchForm from './SearchForm';

function HomePage() {
  return (
    <>
      <div className="homePageDesign">
        <Header />
        <hr />
        <SearchForm />
        <Categories />
      </div>
    </>
  )
}

export default HomePage;
