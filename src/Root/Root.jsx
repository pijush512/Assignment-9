import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';
import Home from '../Pages/Home';

const Root = () => {
  return (
    <div >
      <header className='w-full max-w-11/12 mx-auto '>
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default Root;