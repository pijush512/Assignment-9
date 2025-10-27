import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);


  if (loading) {
    return <span className="loading loading-spinner text-error"></span>
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div >
  );
};

export default PrivateRoute;