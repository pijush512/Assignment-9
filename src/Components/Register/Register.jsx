
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {
  const { creatUser } = use(AuthContext);

  const handelRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error => {
        console.log(error);
      }))
  }


  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Plase Register</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelRegister} className="fieldset" >
                {/* Name */}
                < label className="label">Name</label>
                <input name="name" type="text" className="input" placeholder="Your NAme" />
                {/* Email */}
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                {/* Password */}
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />

                <div>
                  <span>Allready have an account? Plase</span>
                  <span className='link-hover text-blue-600 font-semibold'>
                    <Link to="/login"> Login</Link>
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Register;