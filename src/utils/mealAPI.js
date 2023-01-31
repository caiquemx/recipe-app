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

export const getMealDetailsById = async (id) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = axios.get(ENDPOINT);
  const data = response.json();
  return data;
};

export const getAreas = async () => {
  const ENDPOINT = 'www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = axios.get(ENDPOINT);
  const data = response.json();
  return data;
};
