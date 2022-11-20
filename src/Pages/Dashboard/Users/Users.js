import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader/Loader';

const Users = () => {

    const { isLoading, data } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
            }
        })
            .then(res => res.json())
    })

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
                                    <td>Make Admin</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default Users;