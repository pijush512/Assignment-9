import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);
  if (!user) {
    return;
  }

  return (
    <div>
      <div className="p-5">
        <h1 className="text-3xl font-bold mb-3">Your Profile</h1>
        <p><strong>Name:</strong> {user.displayName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <img src={user.photoURL} alt="Profile" className="w-32 h-32 rounded-full mt-3" />
      </div>
    </div>
  );
};

export default Profile;