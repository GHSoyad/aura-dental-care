import React, { useContext, useEffect, useState } from 'react';
import GoogleSignIn from '../../Firebase/GoogleSignIn';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { RiErrorWarningLine, RiCheckFill, RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [signInEmail, setSignInEmail] = useState('');
    const [token] = useToken(signInEmail);

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handleCreateUser = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const profile = { name };

        createUserWithEmail(email, password)
            .then(userCredential => {
                updateUserProfile(profile)
                    .then(() => {
                        saveUserInfo(data.name, data.email);
                        toast.success('Registered successfully');
                    })
                    .catch((error) => toast.error(error.message));
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const saveUserInfo = (name, email) => {
        const user = {
            name,
            email
        }

        fetch('https://aurora-dental-care-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSignInEmail(email);
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 flex justify-center items-center'>
            <div className='rounded-xl shadow-lg p-4 md:p-8 mt-8 flex-1 max-w-md'>
                <h2 className='text-center text-xl font-medium mb-6'>Register</h2>
                <form onSubmit={handleSubmit(handleCreateUser)} className='flex flex-col gap-4'>
                    <div>
                        <label className='font-medium text-sm label'>Full Name</label>
                        <input {...register("name")} type="text" placeholder="Full Name" className="input input-bordered w-full max-w-md" required />
                    </div>
                    <div>
                        <label className='font-medium text-sm label'>Email</label>
                        <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full max-w-md" required />
                    </div>
                    <div>
                        <label className='input-group items-center font-medium'>
                            <label className='text-sm label'>Password</label>
                            <span className='bg-inherit p-0' >
                                {
                                    errors.password && <RiErrorWarningLine className='text-red-600'></RiErrorWarningLine>
                                }
                                {
                                    isCorrect && <RiCheckFill className='text-green-600'></RiCheckFill>
                                }
                            </span>
                        </label>
                        <label className="input-group">
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 characters long"
                                },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                                    message: "Password must contain one Uppercase, one Lowercase and a Digit!"
                                },
                                onChange: (e) => {
                                    if (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(e.target.value) && (e.target.value.length >= 6)) { setIsCorrect(true) }
                                    else { setIsCorrect(false) }
                                }
                            })} type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full max-w-md focus:outline-none" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="text-lg">
                                {
                                    showPassword ? <RiEyeFill></RiEyeFill> :
                                        <RiEyeOffFill></RiEyeOffFill>
                                }
                            </span>
                        </label>
                    </div>
                    {
                        errors.password &&
                        <p className='text-xs text-red-600'>{errors.password?.message}</p>
                    }
                    <button type='submit' className='btn mt-2'>Register</button>
                </form>
                <p className='text-center text-sm mt-4'>Already have an Account? <Link to='/login' className='text-primary font-medium'>Login.</Link></p>
                <div className="divider my-6">OR</div>
                <GoogleSignIn from='/'></GoogleSignIn>
            </div>
        </div>
    );
};

export default Register;