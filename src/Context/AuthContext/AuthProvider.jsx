import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])



  const authInfo = {
    user,
    creatUser,
    signInUser,
  }

  return (
    <div>
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;