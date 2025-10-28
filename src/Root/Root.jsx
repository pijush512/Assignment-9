import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Banner from '../Components/Banner/Banner';
import Home from '../Pages/Home';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div >
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-gray-300'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Root;