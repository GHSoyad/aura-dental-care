import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useToken from '../Hooks/useToken';

const GoogleSignIn = ({ from }) => {

    const { setUserInfo, googleSignIn } = useContext(AuthContext);
    const [googleEmail, setGoogleEmail] = useState('');
    const navigate = useNavigate();
    const [token] = useToken(googleEmail);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUserInfo(user);
                saveUser(user.displayName, user.email)
            })
            .catch(error => toast.error(error.message))
    }

    const saveUser = (name, email) => {
        const user = {
            name,
            email
        }
        fetch('https://aurora-dental-care-server.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setGoogleEmail(email);
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue with Google</button>
    );
};

export default GoogleSignIn;