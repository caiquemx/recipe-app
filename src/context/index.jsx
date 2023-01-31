import React, {createContext, useEffect, useState} from 'react';
import {getCategories, getMealByName} from '../utils/mealAPI';

export const mealContext = createContext();

export const MealProvider = ({children}) => {
  const [categories, setCategories] = useState();
  const [meals, setMeals] = useState();

  useEffect(() => {
    const fetch = async () => {
      const categories = await getCategories();
      const meals = await getMealByName();
      setCategories(categories);
      setMeals(meals);
    };
    fetch();
  });

  const value = {
    categories,
    meals,
  };

  return <mealContext.Provider value={value}>{children}</mealContext.Provider>;
};
