import React from 'react';
import { TextField, Button } from '@mui/material';

const NameInput = ({ formData, handleInputChange, handleNext }) => {
    const { firstName, lastName } = formData;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            handleNext();
        } else {
            alert('Please enter your first and last name.');
        }
    };

    return (
        <form className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 ' onSubmit={handleFormSubmit}>
            <h2 className='text-3xl py-5 pb-10 font-light'>1. What's Your Name?</h2>
            <TextField
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                required
                className='font-bold'
                sx={{ width: '80%' }}

            />
            <br /><br />
            <TextField
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                required
                sx={{ width: '80%' }}

            />
            <br /><br />
            <button className='hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-40 text-xl rounded-md' type="submit">
                Next
            </button>
        </form>
    );
};

export default NameInput;
