import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loader from '../../../Components/Loader/Loader';

const Users = () => {

    const { isLoading, data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            }
        })
            .then(res => res.json())
    })

    const handleUserRole = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('User role updated.');
                    refetch();
                } else {
                    toast.error(data.message);
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className="overflow-x-auto border rounded-lg">

            {
                isLoading ?
                    <Loader>Loading Users...</Loader>
                    :
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user?.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleUserRole(user._id)} className='btn btn-sm btn-primary'>Make Admin</button>
                                    }</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default Users;