import axios from 'axios';
import React, { useState } from 'react';

const ErrorComponent = ({ formData }) => {
    const [bookingConfirmed, setBookingConfirmed] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [reload, setReload] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [notification, setNotification] = useState(false);

    const submitDetails = () => {
        axios.post("http://localhost:3000/api/v1/vrs/booking", formData)
            .then(res => {
                console.log(res.status);
                if (res.status === 409) {
                    setError(true);
                    setErrorMessage('Vehicle already rented.');
                    setBookingConfirmed(false);
                    setReload(false); // No need to reload if there's an error
                } else if (res.status === 200) {
                    setSuccessMessage('The Booking Has Been Done.');
                    setNotification(true);
                    setTimeout(() => {
                        setSuccessMessage('');
                        setNotification(false);
                    }, 10000);
                    setBookingConfirmed(false);
                    setReload(true);
                }
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setErrorMessage('Vehicle have already been rented, Try another');
                setBookingConfirmed(false);
                setReload(false); // No need to reload if there's an error
            });
    }

    const reloadFunc = () => {
        window.location.reload()
    }

    return (
        <div className='border md:w-[50%] m-auto pb-20 shadow-lg rounded-lg py-5 '>
            {notification && <h3 className='text-xl text-green-500 font-semibold'>{successMessage}</h3>}
            {error && <h3 className='text-xl text-red-500 font-semibold'>{errorMessage}</h3>}

            <h3 className='text-3xl py-5 pb-10 font-light'>Booking Details</h3>
            <p className='text-xl py-2 '>Name:    {formData.firstName} {formData.lastName}</p>
            <p className='text-xl py-2 '>Vehicle Type: {formData.vehicleType}</p>
            <p className='text-xl py-2 '>Vehicle Model: {formData.vehicleModel}</p>
            <p className='text-xl py-2 '>Start Date: {formData.startDate}</p>
            <p className='text-xl py-2 '>End Date: {formData.endDate}</p>

            {bookingConfirmed && <button className={`hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-52 text-xl rounded-md mt-3 `} onClick={submitDetails}>Confirm Booking</button>}
            {reload && <button className={`hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-52 text-xl rounded-md mt-3 `} onClick={reloadFunc}>Back to Home</button>}
            {error && <button className={`hover:bg-blue-600  bg-black h-14 text-white w-[80%] md:w-52 text-xl rounded-md mt-3 `} onClick={reloadFunc}>Try another vehicle</button>}
        </div>
    );
};

export default ErrorComponent;
