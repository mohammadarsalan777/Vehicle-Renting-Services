import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';
import axios from 'axios';

const VehicleModel = ({ formData, handleInputChange, handleNext }) => {
    const { vehicleModel, vehicleType, wheelNumber } = formData;
    const [fourWheelerModel, setFourWheelerModel] = useState([]);
    const [twoWheelerModel, setTwoWheelerModel] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {

        try {

            axios.get('http://localhost:3000/api/v1/vrs/fetch-four-wheeler-api')
                .then((res) => {
                    setFourWheelerModel(res.data.data)
                })
                .catch(err => console.log(err))

            axios.get('http://localhost:3000/api/v1/vrs/fetch-two-wheeler-api')
                .then((res) => {
                    setTwoWheelerModel(res.data.data);


                })
                .catch(err => console.log(err))

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }, []);

    // console.log(fourWheelerModel)

    const filterTypeFourWheeler = fourWheelerModel.filter((item) => item.vehicleType === vehicleType)

    const filterTypeTwoWheeler = twoWheelerModel.filter((item) => item.vehicleType === vehicleType)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (vehicleModel) {
            handleNext();
        } else {
            alert('Please select a vehicle model.');
        }
    };

    return (
        <form className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 ' onSubmit={handleFormSubmit}>
            <FormControl component="fieldset">
                <label component="legend" className='text-3xl py-5 pb-10 font-light'
                >4. Specific Model?</label>
                <RadioGroup name="vehicleModel" value={vehicleModel} onChange={handleInputChange}>
                    {
                        wheelNumber === '4' && filterTypeFourWheeler.map((item, i) =>
                        (
                            <FormControlLabel value={item.vehicleName} key={i} control={<Radio />} label={item.vehicleName} />
                        )
                        )

                    }

                    {
                        wheelNumber === '2' && filterTypeTwoWheeler.map((item, i) =>
                        (
                            <FormControlLabel value={item.vehicleName} key={i} control={<Radio />} label={item.vehicleName} />
                        )
                        )

                    }

                </RadioGroup>
            </FormControl>
            <br /><br />
            <button className='hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-40 text-xl rounded-md' variant="contained" type="submit">
                Next
            </button>
        </form>
    );
};

export default VehicleModel;
