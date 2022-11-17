import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import GoogleSignIn from '../../Firebase/GoogleSignIn';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";
import toast from 'react-hot-toast';

const Login = () => {

    const { signInWithEmail, setUserInfo, setLoading } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (data) => {
        const email = data.email;
        const password = data.password;

        signInWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUserInfo(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 flex justify-center items-center'>
            <div className='rounded-xl shadow-lg p-4 md:p-8 mt-8 flex-1 max-w-md'>
                <h2 className='text-center text-xl font-medium mb-6'>Login</h2>
                <form onSubmit={handleSubmit(handleSignIn)} className='flex flex-col gap-4'>
                    <div>
                        <label className='font-medium text-sm label'>Email</label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div>
                        <label className='font-medium text-sm label'>Password</label>
                        <label className="input-group">
                            <input {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full max-w-md" />
                            <span onClick={() => setShowPassword(!showPassword)} className="text-lg">
                                {
                                    showPassword ? <RiEyeFill></RiEyeFill> :
                                        <RiEyeOffFill></RiEyeOffFill>
                                }
                            </span>
                        </label>
                    </div>
                    <p className='text-xs font-medium'>Forgot Password?</p>
                    <button type='submit' className='btn'>Login</button>
                </form>
                <p className='text-center text-sm mt-4'>New to Aurora Dental Care? <Link to='/register' className='text-primary font-medium'>Create new account.</Link></p>
                <div className="divider my-6">OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;