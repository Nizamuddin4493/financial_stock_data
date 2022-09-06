import React from 'react';
import { Route, Routes } from 'react-router';
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
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default HomePage;
