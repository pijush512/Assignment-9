import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';


const Login = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || '/';


  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert('Google login successful!');
        navigate(from, { replace: true });
        console.log(result.user)
      })
      .catch((error) => {
        console.error(error);
        alert('Google login failed!');
      });
  };



  const handelLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        alert('Sucessful')
        event.target.reset();
        navigate(from, { replace: true });

      })
      .catch((() => {
        alert('Somthing is worng')
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
                  <input type="email" name='email' required className="input" placeholder="Email" />
                  {/* password */}
                  <label className="label">Password</label>
                  <input type="password" name='password' required className="input" placeholder="Password" />
                  <div>
                    <div>
                      <span>Allready have an account? Plase</span>
                      <span className='link-hover text-blue-600 font-semibold'>
                        <Link to="/register"> Register</Link>
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn btn-outline btn-primary mt-2"
                  >
                    Login with Google
                  </button>

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