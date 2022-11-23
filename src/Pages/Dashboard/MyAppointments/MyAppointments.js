import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyAppointments = () => {

    const { userInfo } = useContext(AuthContext);
    const { isLoading, data: appointments } = useQuery({
        queryKey: ['my-appointments', userInfo?.email],
        queryFn: () =>
            fetch(`https://aurora-dental-care-server.vercel.app/my-appointments?email=${userInfo?.email}`, {
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
                    appointments.length < 1 ?
                        <div className='text-center mt-16'>
                            <p className='text-xl my-6'>You haven't booked any appoints yet</p>
                            <Link to='/appointment'><button className='btn btn-primary'>Book Appointment</button></Link>
                        </div>
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
                                                    <Link to={`/dashboard/checkout/${appointment._id}`}><button className='btn btn-xs px-4'>Pay</button></Link>
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