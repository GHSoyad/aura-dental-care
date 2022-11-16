import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const GoogleSignIn = () => {

    const { setUserInfo, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserInfo(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue with Google</button>
    );
};

export default GoogleSignIn;