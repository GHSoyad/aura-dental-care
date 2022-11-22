import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Components/Loader/Loader';

const AllAppointments = () => {
    const { isLoading, data: appointments } = useQuery({
        queryKey: ['all-appointments'],
        queryFn: () =>
            fetch('http://localhost:5000/bookings', {
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
                                <th>Name</th>
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
                                        <td>{appointment.userName}</td>
                                        <td>{appointment.treatment}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment?.cost}</td>
                                        <td>{
                                            appointment?.payment === true ?
                                                <span>Paid</span> :
                                                <span>Unpaid</span>
                                        }</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default AllAppointments;