import React from 'react';
import { Link } from 'react-router';

const AllGame = ({ games }) => {
  return (
    <div>
      <div className='mt-10'>
        <h2 className='mb-5 font-bold text-4xl text-center'>All Games</h2>
        <div className="w-full max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {games.map(game => (
            <Link to={`/game/${game.id}`} key={game.id} >
              <div className="card bg-base-100 shadow-sm h-[400px]">
                <figure>
                  <img
                    src={game.coverPhoto}
                    alt="" />
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
            </Link>
          ))}
        </div>
      </div>
    </div >
  );
};

export default AllGame;