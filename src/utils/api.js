import axios from 'axios';

export const getCategories = async () => {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = axios.get(ENDPOINT);
  const data = response.json();
  return data;
};
