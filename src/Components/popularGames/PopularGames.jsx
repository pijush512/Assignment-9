import React from 'react';
import { Link } from 'react-router';

const PopularGames = ({ games }) => {
  const sortedGames = [...games].sort((a, b) => b.ratings - a.ratings);
  const topGames = sortedGames.slice(0, 3)
  return (
    <div >
      <h2 className='font-bold text-4xl text-center'>Popular Games</h2>

      <div className='grid grid-cols-3 gap-6'>
        {
          topGames.map(game => (
            <Link to={`/game/${game.id}`} key={game.id}>
              < div >
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure>
                    <img
                      src={game.coverPhoto}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{game.title}</h2>
                    <p>{game.description}</p>
                    <div className="card-actions justify-between">
                      <div className="">{game.category}</div>
                      <div className="">{game.ratings}</div>
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