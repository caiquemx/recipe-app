import React from 'react';

export default function DetailsCard({meal}) {
  const ingredientKeys = Object.keys(meal).filter((e) => e.includes('strIngredient'));
  const ingredients = ingredientKeys?.map((k) => meal[k]).filter((e) => !!e);

  const measuresKeys = Object.keys(meal).filter((e) => e.includes('strMeasure'));
  const measures = measuresKeys?.map((m) => meal[m]).filter((e) => !!e);
  const iframeId = meal.strYoutube?.split('=')[1];

  return (
    <div
      className="details-container"
      key={meal.idMeal}
    >
      <section
        className="img-section"
        style={{backgroundImage: `url(${meal.strMealThumb}/preview)`}}
      ></section>
      <section className="title-section">
        <h4 className="meal-title">{meal.strMeal}</h4>
        <p className="meal-category">{meal.strCategory}</p>
        <div className="buttons-container">
          <button className="share-button">Share</button>
          <button className="favorite-button">Fav</button>
        </div>
      </section>
      <section className="ingredient-section">
        <h4 className="ingredient-title">INGREDIENTS</h4>
        <ul className="ingredient-list">
          {ingredients.map((i, index) => (
            <li key={i + index}>{`${i} - ${measures[index]}`}</li>
          ))}
        </ul>
      </section>
      <section className="instructions-section">
        <h4 className="instructions-title">INSTRUCTIONS</h4>
        <p className="instructions-text">{meal.strInstructions}</p>
      </section>
      <section className="video-section">
        <h4 className="video-title">VIDEO</h4>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={meal.strMeal}
          src={`https://www.youtube.com/embed/${iframeId}`}
          frameborder="0"
        />
      </section>
      <button>START</button>
    </div>
  );
}
