import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';
import axios from 'axios';

const VehicleType = ({ formData, handleInputChange, handleNext }) => {
    const { wheelNumber, vehicleType } = formData;
    const [data, setData] = useState([]);
    const [fourWheelerTypes, setFourWheelerTypes] = useState([]);
    const [twoWheelerTypes, setTwoWheelerTypes] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fourWheelerResponse, twoWheelerResponse] = await Promise.all([
                    axios.get('http://localhost:3000/api/v1/vrs/fetch-four-wheeler-api'),
                    axios.get('http://localhost:3000/api/v1/vrs/fetch-two-wheeler-api')
                ]);
                setData({ fourWheeler: fourWheelerResponse.data.data, twoWheeler: twoWheelerResponse.data.data });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data.fourWheeler) {
            const wheels4 = data.fourWheeler.map((item) => item.vehicleType);
            const fourWheelerTypes = [...new Set(wheels4)];
            setFourWheelerTypes(fourWheelerTypes);
        }

        if (data.twoWheeler) {
            const wheels2 = data.twoWheeler.map((item) => item.vehicleType);
            const twoWheelerTypes = [...new Set(wheels2)];
            setTwoWheelerTypes(twoWheelerTypes);
        }
    }, [data]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (vehicleType) {
            handleNext();
        } else {
            alert('Please select the vehicle type.');
        }
    };

    return (
        <form className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 ' onSubmit={handleFormSubmit}>
            <FormControl component="fieldset">
                <label
                    className='text-3xl py-5 pb-10 font-light'
                    component="legend">3. Type of Vehicle?</label>
                <RadioGroup name="vehicleType" value={vehicleType} onChange={handleInputChange}>
                    {wheelNumber === '2' && twoWheelerTypes.map((item, i) => (
                        <FormControlLabel value={item} key={i} control={<Radio />} label={item} />
                    ))}
                    {wheelNumber === '4' && fourWheelerTypes.map((item, i) => (
                        <FormControlLabel value={item} key={i} control={<Radio />} label={item} />
                    ))}
                </RadioGroup>
            </FormControl>
            <br />
            <button className='hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-40 text-xl rounded-md mt-5' variant="contained" type="submit">
                Next
            </button>
        </form>
    );
};

export default VehicleType;
