import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyAppointments = () => {

    const { userInfo } = useContext(AuthContext);
    const { isLoading, data: appointments } = useQuery({
        queryKey: ['my-appointments', userInfo?.email],
        queryFn: () =>
            fetch(`http://localhost:5000/my-appointments?email=${userInfo?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('auroraSecretToken')}`
                }
            })
                .then(res => res.json())
    })

    return (
        <div className="overflow-x-auto">
            {
                isLoading ?
                    <Loader>Loading Appointments...</Loader>
                    :
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Cost</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((appointment, i) =>
                                    <tr key={appointment._id}>
                                        <th>{i + 1}</th>
                                        <td>{appointment.treatment}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment?.cost}</td>
                                        <td>{
                                            appointment?.payment === true ?
                                                <span className='px-3'>Paid</span> :
                                                <button className='btn btn-xs px-4'>Pay</button>
                                        }</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyAppointments;