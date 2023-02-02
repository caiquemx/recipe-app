import React from 'react';
import Loading from './Loading';

export default function DetailsCard({meal}) {
  return (
    <div className="details-container">
      {meal ? (
        <>
          <section
            className="img-section"
            style={{backgroundImage: `url(${meal?.thumb}/preview)`}}
          ></section>
          <section className="title-section">
            <h4 className="meal-title">{meal?.name}</h4>
            <p className="meal-category">{meal?.category}</p>
            <div className="buttons-container">
              <button className="share-button">Share</button>
              <button className="favorite-button">Fav</button>
            </div>
          </section>
          <section className="ingredient-section">
            <h4 className="ingredient-title">INGREDIENTS</h4>
            <ul className="ingredient-list">
              {meal?.ingredients?.map((i, index) => (
                <li key={i + index}>{`${i} - ${meal?.measures[index]}`}</li>
              ))}
            </ul>
          </section>
          <section className="instructions-section">
            <h4 className="instructions-title">INSTRUCTIONS</h4>
            <p className="instructions-text">{meal?.instructions}</p>
          </section>
          <section className="video-section">
            <h4 className="video-title">VIDEO</h4>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={meal?.name}
              src={`https://www.youtube.com/embed/${meal?.youtubeId}`}
            />
          </section>
          <button>START</button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
