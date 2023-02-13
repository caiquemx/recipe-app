import React, {useContext} from 'react';
import {mealContext} from '../context';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MealCard from '../components/MealCard';

export default function Home() {
  const {categories, meals, functions} = useContext(mealContext);

  const handleCategoryClick = async (category) => {
    await functions.categoryFilter(category);
  };

  return (
    <>
      <Header pageTitle={'HOME'} />
      <div>
        {meals && categories ? (
          <>
            <section>
              <div>
                {categories?.map((e) => (
                  <div
                    id={e.id}
                    key={e.strCategory + e.idCategory}
                    onClick={() => handleCategoryClick(e.strCategory)}
                  >
                    {e.strCategory}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div>
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
