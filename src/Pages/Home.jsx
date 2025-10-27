import React, { } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
// import card from "../assets/card.png"
import PopularGames from '../Components/popularGames/PopularGames';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import AllGame from '../Components/AllGame/AllGame';

const Home = () => {
  const games = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <AllGame games={games}></AllGame>
      <PopularGames games={games}></PopularGames>
      <NewsLetter></NewsLetter>
    </div >

  );
};

export default Home;