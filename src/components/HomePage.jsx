import React from 'react';
import Categories from './Categories';
import Details from './Details';
import Header from './Header';
import SearchForm from './SearchForm';

function HomePage() {
  return (
    <>
      <div className="homePageDesign">
        <Header />
        <hr />
        <SearchForm />
        {/* <Categories /> */}
        <Details />
      </div>
    </>
  )
}

export default HomePage;
