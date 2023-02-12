import React from 'react';
import {useNavigate} from 'react-router';

export default function MealCard({meals}) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="card-container"
      onClick={() => handleCardClick(meals.id)}
    >
      <img
        src={`${meals.thumb}/preview`}
        alt={`Image of ${meals.name}`}
      />
      <p>{meals.name}</p>
    </div>
  );
}
