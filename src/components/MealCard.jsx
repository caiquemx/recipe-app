import React from 'react';
import {useNavigate, generatePath} from 'react-router';
import '../styles/meal.css';

export default function MealCard({meals}) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="card-container"
      onClick={() => handleCardClick(meals.idMeal)}
    >
      <img
        src={`${meals.strMealThumb}/preview`}
        alt={`Image of ${meals.strMeal}`}
      />
      <p>{meals.strMeal}</p>
    </div>
  );
}
