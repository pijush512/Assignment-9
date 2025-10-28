import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);
  if (!user) {
    return;
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="p-10">
        <h1 className="text-5xl text-blue-600 font-bold mb-3">Your Profile</h1>
        <p><strong>Name:</strong> {user.displayName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <img src={user.photoURL} alt="Profile" className="rounded-bl-4xl rounded-tr-4xl mt-3" />
      </div>
    </div >
  );
};

export default Profile;