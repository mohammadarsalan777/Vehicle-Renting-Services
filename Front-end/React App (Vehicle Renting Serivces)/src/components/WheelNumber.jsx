import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';

const WheelNumber = ({ formData, handleInputChange, handleNext }) => {
    const { wheelNumber } = formData;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (wheelNumber) {
            handleNext();
        } else {
            alert('Please select the number of wheels.');
        }
    };

    return (
        <form className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 ' onSubmit={handleFormSubmit}>
            <FormControl component="fieldset">
                <label component="legend" className='text-3xl py-5 pb-10 font-light'

                >2. Number of Wheels</label>
                <RadioGroup name="wheelNumber" value={wheelNumber} onChange={handleInputChange}>
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
            </FormControl>
            <br /><br />
            <button className='hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-40 text-xl rounded-md' type="submit">
                Next
            </button>
        </form>
    );
};

export default WheelNumber;
