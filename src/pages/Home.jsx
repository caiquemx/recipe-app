import React, {useContext} from 'react';
import {mealContext} from '../context';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MealCard from '../components/MealCard';
import '../styles/home.css';

export default function Home() {
  const {categories, meals, functions} = useContext(mealContext);

  const handleCategoryClick = async (category) => {
    await functions.categoryFilter(category);
  };

  return (
    <>
      <Header />
      <div className="home-container">
        {meals && categories ? (
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
                  <MealCard
                    key={e.name}
                    meals={e}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
