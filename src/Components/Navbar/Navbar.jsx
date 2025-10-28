import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import '../Navbar/Navbar.css';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthContext/AuthContext';


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handeSignlOut = () => {
    signOutUser()
      .then(() => {
        alert('SignOut');
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </>

  return (
    <nav className='w-full bg-gray-200 '>
      <div className="navbar max-w-11/12 mx-auto  " >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-xl ">
            <img className="w-20" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-semi-bold text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {
            user ?
              <>
                <Link to="/profile" className=" w-[50px]">
                  <img className="w-[45px] h-[45px] rounded-full"
                    src={user.photoURL} alt="" />
                </Link>
                <Link to="/signout" onClick={handeSignlOut} className="btn bg-blue-400 text-white font-bold px-5" >SignOut</Link>
              </>
              :
              <>
                <Link to="/login" className=" btn  bg-[#3A59D1] text-white font-bold px-7">Login</Link>
                <Link to="/register" className="btn bg-[#3A59D1] text-white font-bold px-5" >Register</Link>
              </>
          }

        </div>
      </div >
    </nav>
  );
};

export default Navbar;