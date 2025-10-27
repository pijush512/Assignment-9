import React from 'react';
import { Link } from 'react-router';

const AllGame = ({ games }) => {
  return (
    <div>
      <div className=''>
        <h2 className='font-bold text-4xl text-center'>All Games</h2>
        <div className="grid grid-cols-3">
          {games.map(game => (
            <Link to={`/game/${game.id}`} key={game.id} >
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
            </Link>
          ))}
        </div>
      </div>
    </div >
  );
};

export default AllGame;