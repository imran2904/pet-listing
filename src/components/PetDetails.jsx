import React from 'react';
import './PetDetails.css';
const PetDetails = ({ pet }) => {
  const petDetails = pet && pet.length > 0 ? pet[0] : null;

  if (!petDetails) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="container text-pretty  mx-auto px-4">
      <div className="max-w-2xl  main p-4  ">
        <h1 className="text-2xl font-bold">{petDetails.name}</h1>
        <p>{petDetails.description}</p>
        <p>Animal: {petDetails.animal}</p>
        <p>Breed: {petDetails.breed}</p>
        <p>
          Location:{petDetails.city}, {petDetails.state}
        </p>
        <div className=" row  mt-4">
          {petDetails.images && petDetails.images.length > 0 ? (
            petDetails.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${petDetails.name} ${index}`}
                className=" col-md-4 rounded-md mb-2"
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
