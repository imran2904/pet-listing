import React from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';
import './HomePage.css';
const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl mt-4 font-bold text-center custom-heading">
        Pet Listing
      </h1>
      <div className="search-form-container">
        <SearchForm />
      </div>
      <div className="pet-list-container">
        <PetList />
      </div>
    </div>
  );
};

export default HomePage;
