import React from 'react';
import NameInput from './NameInput';
import WheelNumber from './WheelNumber';
import VehicleType from './VehicleType';
import VehicleModel from './VehicleModel';
import DateRangePicker from './DateRangePicker';
import BookingDetails from './BookingDetails';

const Question = ({ step, formData, handleInputChange, handleDateChange, handleNext }) => {
    switch (step) {
        case 1:
            return <NameInput formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />;
        case 2:
            return <WheelNumber formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />;
        case 3:
            return <VehicleType formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />;
        case 4:
            return <VehicleModel formData={formData} handleInputChange={handleInputChange} handleNext={handleNext} />;
        case 5:
            return <DateRangePicker formData={formData} handleDateChange={handleDateChange} handleNext={handleNext} />;
        default:
            return <BookingDetails formData={formData} />;
    }
};

export default Question;
