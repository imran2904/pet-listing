import axios from 'axios';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://pets-v2.dev-apis.com';

export const fetchPets = async () => {
  const response = await fetch('http://pets-v2.dev-apis.com/pets');
  const data = await response.json();
  return data;
};

export const fetchPetById = async (id) => {
  const response = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pet details');
  }
  const data = await response.json();

  return data;
};

export const fetchBreedsByAnimal = async (animal) => {
  const response = await axios.get(`${API_BASE_URL}/breeds?animal=${animal}`);
  return response.data;
};

export const searchPets = async (animal, location, breed) => {
  const response = await axios.get(`${API_BASE_URL}/pets`, {
    params: { animal, location, breed },
  });
  return response.data;
};
