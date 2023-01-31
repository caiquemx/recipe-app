import axios from 'axios';

export const getCategories = async () => {
  const ENDPOINT = 'http://www.themealdb.com/api/json/v1/1/categories.php';
  const {data} = await axios.get(ENDPOINT);
  return data;
};

export const getAreas = async () => {
  const ENDPOINT = 'http://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const {data} = await axios.get(ENDPOINT);
  return data;
};

export const getMealByName = async (name) => {
  const ENDPOINT = `http://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const {data} = await axios.get(ENDPOINT);
  return data;
};

export const getMealDetailsById = async (id) => {
  const ENDPOINT = `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const {data} = await axios.get(ENDPOINT);
  return data;
};

export const getMealByCategory = async (category) => {
  const ENDPOINT = `http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const {data} = await axios.get(ENDPOINT);
  return data;
};

export const getMealByArea = async (area) => {
  const ENDPOINT = `http://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const {data} = await axios.get(ENDPOINT);
  return data;
};
