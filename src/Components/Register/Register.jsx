
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { creatUser } = use(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handelRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.PhotoUrl.value;
    const password = event.target.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter!");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError(" Password must contain at least one lowercase letter!");
      return;
    }
    setError('');

    creatUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        updateProfile(loggedInUser, {
          displayName: name,
          photoURL: photo
        })
      })
      .then(() => {
        alert('Registration Successful!');
        event.target.reset();
        navigate("/");
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
                <input name="name" type="text" className="input" placeholder="Your Name" />
                {/* Photo Url */}
                < label className="label">Photo Url</label>
                <input name="PhotoUrl" type="text" className="input" placeholder="Photo Url" />
                {/* Email */}
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                {/* Password */}
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <div>
                  {error && <p className="text-red-600 mt-1">{error}</p>}
                </div>
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