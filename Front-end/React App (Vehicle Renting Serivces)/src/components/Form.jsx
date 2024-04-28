import React, { useState } from 'react';
import Question from './Question';

const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        wheelNumber: '',
        vehicleType: '',
        vehicleModel: '',
        startDate: null,
        endDate: null,
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setFormData({ ...formData, startDate: start, endDate: end });
    };



    return (
        <div>
            <Question
                step={step}
                formData={formData}
                handleInputChange={handleInputChange}
                handleDateChange={handleDateChange}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Form;
