import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {
  const { signInUser } = use(AuthContext);


  const handelLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error => {
        console.log(error);
      }))
  }

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

                <form onSubmit={handelLogIn} className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                  {/* password */}
                  <label className="label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" />

                  <div>
                    <div>
                      <span>Allready have an account? Plase</span>
                      <span className='link-hover text-blue-600 font-semibold'>
                        <Link to="/register"> Register</Link>
                      </span>
                    </div>
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