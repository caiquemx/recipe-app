import React, {useState, useEffect, useContext} from 'react';
import {mealContext} from '../context';
import {getMealByCategory} from '../utils/mealAPI';
import Header from '../components/Header';
import '../styles/home.css';

export default function Home() {
  const {categories, meals, functions, isLoading, setIsLoading} = useContext(mealContext);

  const handleCategoryClick = async (category) => {
    try {
      setIsLoading(true);
      await functions.categoryFilter(category);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="home-container">
      <Header />
      {!isLoading ? (
        <>
          <section className="categories">
            <div className="categories-container">
              {categories?.map((e) => (
                <div
                  className="category"
                  id={e.id}
                  key={e.strCategory + e.idCategory}
                  onClick={() => handleCategoryClick(e.strCategory)}
                >
                  {e.strCategory}
                </div>
              ))}
            </div>
          </section>
          <section className="meal">
            <div className="meal-container">
              {meals?.map((e) => (
                <p>{e.strMeal}</p>
              ))}
            </div>
          </section>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
