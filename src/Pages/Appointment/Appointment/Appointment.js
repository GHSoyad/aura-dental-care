import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import TimePicker from '../TimePicker/TimePicker';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate}></DatePicker>
            <TimePicker selectedDate={selectedDate}></TimePicker>
        </div>
    );
};

export default Appointment;