import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPets } from '../services/api';
import { PetContext } from '../context/PetContext';

const PetList = () => {
  const { pets, setPets } = useContext(PetContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPets();
        setPets(data.pets);
      } catch (error) {
        console.error('Failed to fetch pets:', error);
      }
    };

    fetchData();
  }, [setPets]);

  if (!pets) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {pets.map((pet) => (
          <div className="col-md-4" key={pet.id}>
            <div
              style={{ 'box-shadow': ' 0 4px 8px rgba(0, 0, 0, 0.1)' }}
              className="p-4   mb-4"
            >
              {pet.images ? (
                <img
                  src={
                    (Array.isArray(pet.images) ? pet.images[0] : pet.images) ||
                    placeholderImage
                  }
                  className="card-img-top"
                  alt={pet.name}
                />
              ) : (
                <div
                  className="card-img-top"
                  style={{ height: '200px', backgroundColor: '#f0f0f0' }}
                >
                  No Image Available
                </div>
              )}
              <div className="card-body ">
                <h3 className="card-title ">{pet.name}</h3>
                <p className="card-text">{pet.description}</p>
                <Link to={`/pets/${pet.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
