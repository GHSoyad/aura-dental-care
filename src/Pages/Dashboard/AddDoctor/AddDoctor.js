import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddDoctor = () => {

    const { register, handleSubmit } = useForm();

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=38ec78febea1a1afd179071af6a9be84`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imgURL = imgData.data.url;
                    const name = data.name;
                    const email = data.email;
                    const specialty = data.specialty;

                    const doctor = {
                        name, email, imgURL, specialty
                    }

                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Doctor Added')
                            }
                        })
                        .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='px-4'>
            Add Doctor

            <form onSubmit={handleSubmit(handleAddDoctor)} className='flex flex-col gap-4 max-w-md'>
                <div>
                    <label className='font-medium text-sm label'>Email</label>
                    <input {...register("email")} type="email" placeholder="Email" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className='font-medium text-sm label'>Name</label>
                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className='font-medium text-sm label'>Image</label>
                    <input {...register('image')} type="file" className="file-input file-input-bordered w-full" required />
                </div>
                <select {...register('specialty')} className="select select-bordered w-full mt-2" required>
                    <option value=''>Select specialty</option>
                    <option value='han'>Han Solo</option>
                    <option value='gre'>Greedo</option>
                </select>
                <button type='submit' className='btn mt-4'>Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctor;