import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../../Components/ConfirmModal/ConfirmModal';
import Loader from '../../../Components/Loader/Loader';

const ManageDoctor = () => {

    const [doctorInfo, setDoctorInfo] = useState(null);
    const { isLoading, data: doctors, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            }
        })
            .then(res => res.json())
    })

    const handleDeleteDoctor = (data) => {

        const id = data._id;
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Doctor deleted.');
                    refetch();
                }
            })

    }

    return (
        <div className="overflow-x-auto">
            {
                isLoading ?
                    <Loader>Loading data...</Loader>
                    :
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor, i) => {
                                    return <tr key={doctor._id}>
                                        <th>{i + 1}</th>
                                        <td className='py-0'><img src={doctor.imgURL} alt="" className='w-10 h-10 object-cover rounded-full' /></td>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.specialty}</td>
                                        <td><label htmlFor="confirm-modal" onClick={() => setDoctorInfo(doctor)} className="btn btn-sm">Delete</label></td>
                                    </tr>
                                }
                                )
                            }
                        </tbody>
                    </table>
            }
            {
                doctorInfo &&
                <ConfirmModal
                    title='Delete Doctor information?'
                    message={`Are you sure? ${doctorInfo.name} information will be deleted. This action cannot be undone.`}
                    confirm={handleDeleteDoctor}
                    modalData={doctorInfo}
                    closeModal={setDoctorInfo}
                ></ConfirmModal>
            }
        </div>
    );
};

export default ManageDoctor;