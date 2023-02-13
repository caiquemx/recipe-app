import React from 'react';
import Loading from './Loading';

export default function DetailsCard({meal}) {
  return (
    <div className="flex flex-col">
      {meal ? (
        <div className="flex flex-col m-4 justify-center border bg-blue-200 shadow-lg rounded-xl">
          <section className="flex flex-col w-9/12 lg:w-1/2 m-8 font-mono tracking-wide text-xl self-center">
            <img
              alt={`image of ${meal?.title}`}
              className="w-full"
              src={meal?.thumb}
            />
            <h4 className="p-2 text-2xl">{meal?.name}</h4>
            <p className="m-2 ml-0 border p-2 bg-blue-100 rounded-xl w-fit">{meal?.category}</p>
            <div className="flex space-x-4 p-2">
              <button className="share-button">💞</button>
              <button className="favorite-button">⭐</button>
            </div>
          </section>
          <section className="flex flex-col m-8 font-mono tracking-wide text-lg">
            <h4 className="font-bold text-2xl italic">INGREDIENTS</h4>
            <ul className="bg-gray-200 p-2">
              {meal?.ingredients?.map((i, index) => (
                <li key={i + index}>{`${i} - ${meal?.measures[index]}`}</li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col m-8 font-mono tracking-wide text-lg">
            <h4 className="font-bold text-2xl italic">INSTRUCTIONS</h4>
            <p className="bg-gray-200 p-2">{meal?.instructions}</p>
          </section>
          <section className="flex flex-col m-8 font-mono tracking-wide text-lg">
            <h4 className="font-bold text-2xl italic">VIDEO</h4>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={meal?.name}
              src={`https://www.youtube.com/embed/${meal?.youtubeId}`}
            />
          </section>
          <button className="border p-4 m-8 w-1/2 bg-blue-400 hover:bg-white font-mono tracking-wider text-2xl rounded-lg self-center shadow-md">
            START
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
