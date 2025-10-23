import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex flex-col ">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">

                <form className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" />

                  <div>
                    <a>
                      Allready have an account? Plase
                      <span className='link-hover text-blue-600 font-semibold'>
                        <Link to="/register"> Register</Link>
                      </span>
                    </a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Login;