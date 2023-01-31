import axios from 'axios';

export const getCategories = async () => {
  const ENDPOINT = 'www.themealdb.com/api/json/v1/1/categories.php';
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};

export const getAreas = async () => {
  const ENDPOINT = 'www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};

export const getMealByName = async (name) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};

export const getMealDetailsById = async (id) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};

export const getMealByCategory = async (category) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};

export const getMealByArea = async (area) => {
  const ENDPOINT = `www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const response = await axios.get(ENDPOINT);
  const data = await response.json();
  return data;
};
