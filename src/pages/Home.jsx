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
      <div className="mt-28">
        {meals && categories ? (
          <section className="flex flex-col">
            <div className="flex flex-row flex-wrap mb-4 justify-center">
              {categories?.map((e) => (
                <span
                  id={e.id}
                  className="m-2 border p-2 bg-blue-100 cursor-pointer hover:bg-white shadow-md rounded-sm"
                  key={e.strCategory + e.idCategory}
                  onClick={() => handleCategoryClick(e.strCategory)}
                >
                  {e.strCategory}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap flex-row space-x-2 space-y-4 w-full justify-center items-center">
              {meals?.map((e) => (
                <MealCard
                  key={e.name}
                  meals={e}
                />
              ))}
            </div>
          </section>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
