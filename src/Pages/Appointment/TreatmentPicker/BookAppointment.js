import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const BookAppointment = ({ bookAppointment, selectedDate, handleBooking }) => {

    const { name, slots } = bookAppointment;
    const { userInfo } = useContext(AuthContext);
    console.log(userInfo)

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold text-left mb-10">{name}</h3>
                    <form onSubmit={(e) => handleBooking(e, name)} className='flex flex-col gap-6'>
                        <input type="text" value={format(selectedDate, 'PP')} className="input input-bordered w-full input-disabled" readOnly />
                        <select name='time' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='userName' type="text" value={userInfo?.displayName ? userInfo?.displayName : 'Name not found'} placeholder="Full Name" className="input input-bordered w-full input-disabled" readOnly />
                        <input name='userEmail' type="text" value={userInfo?.email} placeholder="Email" className="input input-bordered w-full input-disabled" readOnly />
                        <input name='userPhone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookAppointment;