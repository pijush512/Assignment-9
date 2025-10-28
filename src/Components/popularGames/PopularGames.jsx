import React from 'react';
import { Link } from 'react-router';

const PopularGames = ({ games }) => {
  const sortedGames = [...games].sort((a, b) => b.ratings - a.ratings);
  const topGames = sortedGames.slice(0, 3)
  return (
    <div className='mt-10'>
      <h2 className='mb-5 font-bold text-4xl text-center'>Popular Games</h2>

      <div className='w-full max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        {
          topGames.map(game => (
            <Link to={`/game/${game.id}`} key={game.id}>
              < div >
                <div className="card bg-base-100 shadow-sm h-[400px]">
                  <figure>
                    <img
                      src={game.coverPhoto}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">{game.title}</h2>
                    <p>{game.description}</p>
                    <div className="card-actions justify-between">
                      <div className="font-bold text-lg">{game.category}</div>
                      <div className="font-bold text-lg text-[#f87b06]">{game.ratings}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>

    </div >
  );
};

export default PopularGames;