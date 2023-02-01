import React, {createContext, useEffect, useState} from 'react';
import {getCategories, getMealByName, getMealByCategory} from '../utils/mealAPI';

export const mealContext = createContext();

export const MealProvider = ({children}) => {
  const [categories, setCategories] = useState();
  const [meals, setMeals] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const {categories} = await getCategories();
      const {meals} = await getMealByName();
      setCategories(categories);
      setMeals(meals);
    };
    fetch();
    setIsLoading(false);
  }, []);

  const categoryFilter = async (category) => {
    const {meals} = await getMealByCategory(category);
    setMeals(meals);
  };

  const value = {
    isLoading,
    setIsLoading,
    categories,
    meals,
    functions: {categoryFilter},
  };

  return <mealContext.Provider value={value}>{children}</mealContext.Provider>;
};
