import React from 'react';

export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    onBlurHandler,
    type = 'text',
    showErrorMessage,
    validationMessage,
}) => {
    const handleBlur = (event) => {
        onBlurHandler(event.target.value, field);
    };

    const handleChange = (event) => {
        onChangeHandler(event.target.value, field);
    };

    return (
        <div className="input-container">
            <label htmlFor={field}>{label}</label>
            <input
                id={field}
                type={type}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {showErrorMessage && <span className="error-message">{validationMessage}</span>}
        </div>
    );
};
