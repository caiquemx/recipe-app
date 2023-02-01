import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import {getMealDetailsById} from '../utils/mealAPI';
import DetailsCard from '../components/DetailsCard';
import '../styles/details.css';

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

  return (
    <div>
      <DetailsCard meal={meal} />
    </div>
  );
}
