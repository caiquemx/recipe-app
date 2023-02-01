import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {getMealDetailsById} from '../utils/mealAPI';

export default function Details() {
  const {id} = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const {meals} = await getMealDetailsById(id);
      setMeal(...meals);
    };
    fetch();
  }, []);

  const ingredientKeys = Object.keys(meal).filter((e) => e.includes('strIngredient'));
  const ingredients = ingredientKeys
    .map((k) => {
      return meal[k];
    })
    .filter((e) => !!e);
  console.log(ingredients);

  return <div>Details</div>;
}
