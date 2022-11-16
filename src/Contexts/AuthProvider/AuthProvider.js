import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const [userInfo, setUserInfo] = useState(null);

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        userInfo,
        setUserInfo,
        googleSignIn
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;