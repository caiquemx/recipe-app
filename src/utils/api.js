import axios from 'axios';

export const getCategories = async () => {
  const ENDPOINT = 'www.themealdb.com/api/json/v1/1/categories.php';
  const response = axios.get(ENDPOINT);
  const data = response.json();
  return data;
};

export const getMealByName = async (name) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = axios.get(ENDPOINT);
  const data = response.json();
  return data;
};
