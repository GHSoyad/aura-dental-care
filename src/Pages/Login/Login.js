import React from 'react';
import GoogleSignIn from '../../Firebase/GoogleSignIn';

const Login = () => {
    return (
        <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 flex justify-center items-center'>
            <div className='rounded-xl shadow-lg p-4 md:p-8 mt-8 flex-1 max-w-md'>
                <h2 className='text-center text-xl font-medium mb-6'>Login</h2>
                <form className='flex flex-col gap-4'>
                    <div>
                        <label className='font-medium text-sm label'>Email</label>
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div>
                        <label className='font-medium text-sm label'>Password</label>
                        <input type="text" placeholder="Password" className="input input-bordered w-full max-w-md" />
                    </div>
                    <p className='text-xs font-medium'>Forgot Password?</p>
                    <button className='btn'>Login</button>
                </form>
                <p className='text-center text-sm mt-4'>New to Aurora Dental Care? <span className='text-primary'>Create new account</span></p>
                <div className="divider my-8">OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;