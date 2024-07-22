import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { useRegister } from '../../shared/hooks/useRegister';
import { useNavigate } from 'react-router-dom';
import logoThrive from '../../assets/img/thriveTogether.png';
import { registerValidationMessages, validateRegister } from '../../shared/validators/index';
import './register.css';

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: { value: '', isValid: false, showError: false },
        username: { value: '', isValid: false, showError: false },
        email: { value: '', isValid: false, showError: false },
        password: { value: '', isValid: false, showError: false },
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
            photo: formState.photo.value,
            vices: formState.vices.value,
        };

        register(userData);
    };

    const isSubmitDisabled = isLoading || !Object.values(formState).every((field) => field.isValid);

    return (
        <div className="auth-container">
            <div className="register-container">
                <form className="auth-form" onSubmit={handleRegister}>
                    <div className="auth-logo-container">
                        <img src={logoThrive} alt="Thrive Together Logo" />
                        <div>
                            <h1>Thrive Together</h1>
                        </div>
                    </div>
                    <div className="logo-separator"></div>
                    <div className="input-container">
                        <Input
                            className="input-field"
                            field='name'
                            label='Name'
                            value={formState.name.value}
                            onChangeHandler={(value) => handleInputChange(value, 'name')}
                            type='text'
                            onBlurHandler={(value) => handleValidationOnBlur(value, 'name')}
                            showErrorMessage={formState.name.showError}
                            validationMessage={registerValidationMessages.name}
                        />
                        <Input
                            className="input-field"
                            field='username'
                            label='Username'
                            value={formState.username.value}
                            onChangeHandler={(value) => handleInputChange(value, 'username')}
                            type='text'
                            onBlurHandler={(value) => handleValidationOnBlur(value, 'username')}
                            showErrorMessage={formState.username.showError}
                            validationMessage={registerValidationMessages.username}
                        />
                        <Input
                            className="input-field"
                            field='email'
                            label='Email'
                            value={formState.email.value}
                            onChangeHandler={(value) => handleInputChange(value, 'email')}
                            type='text'
                            onBlurHandler={(value) => handleValidationOnBlur(value, 'email')}
                            showErrorMessage={formState.email.showError}
                            validationMessage={registerValidationMessages.email}
                        />
                        <Input
                            className="input-field"
                            field='password'
                            label='Password'
                            value={formState.password.value}
                            onChangeHandler={(value) => handleInputChange(value, 'password')}
                            type='password'
                            onBlurHandler={(value) => handleValidationOnBlur(value, 'password')}
                            showErrorMessage={formState.password.showError}
                            validationMessage={registerValidationMessages.password}
                        />
                        <Input
                            className="input-field"
                            field='photo'
                            label='Photo URL'
                            value={formState.photo.value}
                            onChangeHandler={(value) => handleInputChange(value, 'photo')}
                            type='text'
                        />
                    </div>
                    <div className="vices-container">
                        <label>Vices</label>
                        <div className="vices-buttons">
                            {['Tabaquismo', 'Alcoholismo', 'Drogadiccion', 'Medicamentos', 'Apuestas'].map((vice) => (
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
                    <button type="submit" disabled={isSubmitDisabled}>
                        Register
                    </button>
                </form>
                <span onClick={() => navigate('/')} className="auth-form-switch-label">
                    ¿Ya tienes una cuenta? ¡Inicia sesión...!
                </span>
            </div>
        </div>
    );
};
