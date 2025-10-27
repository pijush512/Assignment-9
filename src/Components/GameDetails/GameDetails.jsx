import React from "react";
import { useParams, useLoaderData } from "react-router";

const GameDetails = () => {
  const { id } = useParams(); // route theke id
  const games = useLoaderData(); // loader theke sob games

  // specific game ber koro
  const game = games.find((g) => g.id === id);

  if (!game) return <p>Game not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img src={game.coverPhoto} alt={game.title} className="mb-4 w-full h-96 object-cover" />
      <p className="mb-2"><strong>Category:</strong> {game.category}</p>
      <p className="mb-2"><strong>Rating:</strong> {game.ratings}</p>
      <p className="mb-2"><strong>Developer:</strong> {game.developer}</p>
      <p className="mb-4">{game.description}</p>
      <a href={game.downloadLink} target="_blank" className="btn bg-blue-500 text-white">Download</a>
    </div>
  );
};

export default GameDetails;
