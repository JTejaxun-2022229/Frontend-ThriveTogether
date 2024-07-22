/* eslint-disable react/prop-types */
import { useState } from "react";
import logoThrive from "../assets/img/thriveTogether.png"
import { Input } from "./Input";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
  const {login, isLoading} = useLogin();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) =>({
        ...prevState,
        [field]:{
            ...prevState[field],
            isValid,
            showError: !isValid
        }
    }))
  };

  const handleLogin = (event) => {
    event.preventDefault()

    login(formState.email.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid
  return (
    <div className="login-container">
        <div className="login-right">
            <form className="auth-form">
              <div className="auth-logo-container">
                <img src={logoThrive} height={150}/>
                <div>
                <h1>Thrive Together</h1>
              </div>
              </div>
              <div className="logo-separator"></div>
                <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                ¿Aún no tienes una cuenta? ¡Regístrate...!
            </span>
        </div>
    </div>
  );
};