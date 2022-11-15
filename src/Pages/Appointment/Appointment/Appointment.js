import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import TreatmentPicker from '../TreatmentPicker/TreatmentPicker';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}></DatePicker>
            <TreatmentPicker selectedDate={selectedDate}></TreatmentPicker>
        </div>
    );
};

export default Appointment;