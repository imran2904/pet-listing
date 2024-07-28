import React, { useState, useContext } from 'react';
import { searchPets } from '../services/api';
import { PetContext } from '../context/PetContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const { setPets } = useContext(PetContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await searchPets(animal, location, breed);
      setPets(data.pets);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container custom-form  mt-5">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            placeholder="Animal"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed"
            className="form-control"
          />
        </div>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto mt-4 ">
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
