import React, { useContext } from 'react';
import GoogleSignIn from '../../Firebase/GoogleSignIn';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { register, handleSubmit } = useForm();
    const { createUserWithEmail } = useContext(AuthContext);

    const handleCreateUser = (data) => {
        const email = data.email;
        const password = data.password;

        createUserWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container max-w-screen-xl mx-auto px-6 lg:px-0 flex justify-center items-center'>
            <div className='rounded-xl shadow-lg p-4 md:p-8 mt-8 flex-1 max-w-md'>
                <h2 className='text-center text-xl font-medium mb-6'>Register</h2>
                <form onSubmit={handleSubmit(handleCreateUser)} className='flex flex-col gap-4'>
                    <div>
                        <label className='font-medium text-sm label'>Full Name</label>
                        <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div>
                        <label className='font-medium text-sm label'>Email</label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div>
                        <label className='font-medium text-sm label'>Password</label>
                        <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full max-w-md" />
                    </div>
                    <button type='submit' className='btn mt-2'>Register</button>
                </form>
                <p className='text-center text-sm mt-4'>Already have an Account? <span className='text-primary font-medium'>Login.</span></p>
                <div className="divider my-8">OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Register;