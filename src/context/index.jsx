import React, {createContext, useEffect, useState} from 'react';
import {
  getCategories,
  getMealByName,
  getMealByCategory,
  getMealDetailsById,
} from '../utils/mealAPI';
import serialize from '../utils/serialize';

export const mealContext = createContext();

export const MealProvider = ({children}) => {
  const [categories, setCategories] = useState();
  const [meals, setMeals] = useState();

  useEffect(() => {
    const fetch = async () => {
      const {categories} = await getCategories();
      const {meals} = await getMealByName();
      const serialized = serialize(meals);
      setCategories(categories);
      setMeals(serialized);
    };
    fetch();
  }, []);

  const categoryFilter = async (category) => {
    const {meals} = await getMealByCategory(category);
    setMeals(meals);
  };

  const getMealById = async (id) => {
    const response = await getMealDetailsById(id).then(({meals}) => meals);
    const data = {
      meals: await serialize(response),
    };
    return data;
  };

  const getUserData = () => {
    const {user} = {...localStorage};
    const data = JSON.parse(user);
    return data;
  };

  const value = {
    categories,
    data: getUserData(),
    meals,
    functions: {categoryFilter, getMealById},
  };

  return <mealContext.Provider value={value}>{children}</mealContext.Provider>;
};
