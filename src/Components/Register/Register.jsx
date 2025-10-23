import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../../Firebase/Firebase.init';

const Register = () => {

  const handelRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error)
      })


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
                <input name="name" type="name" className="input" placeholder="Email" />
                {/* Email */}
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                {/* Password */}
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />

                <div>
                  Allready have an account? Plase
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