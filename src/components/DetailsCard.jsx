import React from 'react';

export default function DetailsCard({meal}) {
  const ingredientKeys = Object.keys(meal).filter((e) => e.includes('strIngredient'));
  const ingredients = ingredientKeys.map((k) => meal[k]).filter((e) => !!e);

  const mesuresKeys = Object.keys(meal).filter((e) => e.includes('strIngredient'));
  const mesures = mesuresKeys.map((m) => meal[m].filter((e) => !!e));

  return (
    <div className="details-container">
      <section className="img-section">
        <img
          src={meal.strMealThumb}
          alt={`image of ${meal.strMeal}`}
        />
        <h4 className="meal-title">{meal.strMeal}</h4>
        <p className="meal-category">{meal.strCategory}</p>
        <button className="share-button">Share</button>
        <button className="favorite-button">Fav</button>
      </section>
      <section className="ingredient-section">
        <h4 className="ingredient-tile">INGREDIENTS</h4>
        <ul className="ingredient-list">
          {ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </section>
      <section className="intructions-section">
        <p className="instructions-text">{meal.strInstructions}</p>
      </section>
      <section className="video-section">
        <video src={meal.strYouTube} />
      </section>
      <button>START</button>
    </div>
  );
}
