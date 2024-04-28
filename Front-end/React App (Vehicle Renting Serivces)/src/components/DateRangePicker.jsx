import React from 'react';
import { Button } from '@mui/material';

const DateRangePicker = ({ formData, handleDateChange, handleNext }) => {
    const { startDate, endDate } = formData;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            handleNext();
        } else {
            alert('Please select a date range.');
        }
    };

    const handleStartDateChange = (e) => {
        handleDateChange([e.target.value, endDate]);
    };

    const handleEndDateChange = (e) => {
        handleDateChange([startDate, e.target.value]);
    };

    return (
        <form className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 ' onSubmit={handleFormSubmit}>
            <h2 className="text-3xl py-5 pb-10 font-light">5. Pick the Dates for the booking</h2>
            <label className='text-xl mx-5 ' htmlFor="start">Start Date:</label>
            <input
                type="date"
                id="start"
                name="startDate"
                defaultValue={startDate}
                onChange={handleStartDateChange}
                required
                className='text-xl border border-black rounded'
            />
            <br />
            <label className='text-xl mx-5 ' htmlFor="end">End Date:</label>
            <input
                type="date"
                id="end"
                name="endDate"
                defaultValue={endDate}
                onChange={handleEndDateChange}
                className='text-xl border border-black rounded my-2'
                required
            />
            <br /><br />
            <Button variant="contained" type="submit">
                book
            </Button>
        </form>
    );
};

export default DateRangePicker;
