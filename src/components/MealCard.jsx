import React from 'react';
import {useNavigate} from 'react-router';

export default function MealCard({meals}) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className="flex flex-col w-1/4 border first:mt-4 first:ml-2 hover:-translate-y-2 text-center text-md font-mono tracking-wide"
      onClick={() => handleCardClick(meals.id)}
    >
      <img
        alt={`Image of ${meals.name}`}
        className="w-full"
        src={`${meals.thumb}/preview`}
      />
      <p>{meals.name}</p>
    </div>
  );
}
