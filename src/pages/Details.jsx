import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import DetailsCard from '../components/DetailsCard';
import {mealContext} from '../context';

import '../styles/details.css';

export default function Details() {
  const {functions} = useContext(mealContext);
  const {id} = useParams();
  const [meal, setMeal] = useState();

  useEffect(() => {
    const fetch = async () => {
      const {meals} = await functions.getMealById(id);
      setMeal(...meals);
    };
    fetch();
  }, []);

  return (
    <div>
      <DetailsCard meal={meal} />
    </div>
  );
}
