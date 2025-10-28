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
                  <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
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