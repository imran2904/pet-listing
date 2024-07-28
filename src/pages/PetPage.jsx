import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPetById } from '../services/api';
import PetDetails from '../components/PetDetails';

const PetPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPet = async () => {
      try {
        const data = await fetchPetById(id);
        console.log(data.pets);
        setPet(data.pets);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPet();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!pet) {
    return <p className="text-center">Pet not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <PetDetails pet={pet} />
    </div>
  );
};

export default PetPage;
