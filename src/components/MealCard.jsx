import React from 'react';
import '../styles/meal.css';

export default function MealCard({meals}) {
  return (
    <div className="card-container">
      <img
        src={`${meals.strMealThumb}/preview`}
        alt={`Image of ${meals.strMeal}`}
      />
      <p>{meals.strMeal}</p>
    </div>
  );
}
