import React, { useState } from 'react';
import { Input } from './Input';
import { registerValidationMessages, validateRegister } from '../shared/validators';
import { useRegister } from '../shared/hooks';
import logoThrive from '../assets/img/thriveTogether.png';

export const Register = ({ switchAuthHandler }) => {

    const { registerUser, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        name: { value: '', isValid: false, showError: false },
        username: { value: '', isValid: false, showError: false },
        email: { value: '', isValid: false, showError: false },
        password: { value: '', isValid: false, showError: false },
        description: { value: '', isValid: true, showError: false },
        photo: { value: '', isValid: true, showError: false },
        vices: { value: [], isValid: true, showError: false },
    });

    const handleInputChange = (value, field) => {

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleValidationOnBlur = (value, field) => {

        const isValid = validateRegister(field, value);
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    };

    const handleVicesToggle = (vice) => {

        setFormState((prevState) => {
            const newVices = prevState.vices.value.includes(vice)
                ? prevState.vices.value.filter((v) => v !== vice)
                : [...prevState.vices.value, vice];

            return {
                ...prevState,
                vices: {
                    ...prevState.vices,
                    value: newVices,
                },
            };
        });
    };

    const handleRegister = (event) => {
        
        event.preventDefault();
        const userData = {
            name: formState.name.value,
            username: formState.username.value,
            email: formState.email.value,
            password: formState.password.value,
            description: formState.description.value,
            photo: formState.photo.value,
            vices: formState.vices.value,
        };

        registerUser(userData);
    };

    const isSubmitDisabled = isLoading || !Object.values(formState).every((field) => field.isValid);

    return (
        <div className="register-container">
            <div className="register-right">
                <form className="auth-form">
                    <div className="auth-logo-container">
                        <img src={logoThrive} height={150} />
                        <div>
                            <h1>Thrive Together</h1>
                        </div>
                    </div>
                    <div className="logo-separator"></div>
                    <Input
                        field='name'
                        label='Name'
                        value={formState.name.value}
                        onChangeHandler={handleInputChange}
                        type='text'
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formState.name.showError}
                        validationMessage={registerValidationMessages.name}
                    />
                    <Input
                        field='username'
                        label='Username'
                        value={formState.username.value}
                        onChangeHandler={handleInputChange}
                        type='text'
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formState.username.showError}
                        validationMessage={registerValidationMessages.username}
                    />
                    <Input
                        field='email'
                        label='Email'
                        value={formState.email.value}
                        onChangeHandler={handleInputChange}
                        type='text'
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formState.email.showError}
                        validationMessage={registerValidationMessages.email}
                    />
                    <Input
                        field='password'
                        label='Password'
                        value={formState.password.value}
                        onChangeHandler={handleInputChange}
                        type='password'
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formState.password.showError}
                        validationMessage={registerValidationMessages.password}
                    />
                    <Input
                        field='description'
                        label='Description'
                        value={formState.description.value}
                        onChangeHandler={handleInputChange}
                        type='text'
                    />
                    <Input
                        field='photo'
                        label='Photo URL'
                        value={formState.photo.value}
                        onChangeHandler={handleInputChange}
                        type='text'
                    />
                    <div className="vices-container">
                        <label>Vices</label>
                        <div className="vices-buttons">
                            {['smoking', 'drinking', 'gambling', 'other'].map((vice) => (
                                <button
                                    type="button"
                                    key={vice}
                                    className={`vice-button ${formState.vices.value.includes(vice) ? 'active' : ''}`}
                                    onClick={() => handleVicesToggle(vice)}
                                >
                                    {vice}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={handleRegister} disabled={isSubmitDisabled}>
                        Register
                    </button>
                </form>
                <span onClick={switchAuthHandler} className="auth-form-switch-label">
                    ¿Ya tienes una cuenta? ¡Inicia sesión...!
                </span>
            </div>
        </div>
    );
};