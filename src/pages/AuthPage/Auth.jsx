import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../shared/hooks/useLogin';
import './auth.css';
import logo from '../../assets/image/thriveTogether.png';

export const Login = () => {

    const { login, error } = useLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        await login({ email, password });
    };

    const handleRegister = () => {

        navigate('/register');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Bienvenido a Thrive Together</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Email o nombre de usuario"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
                {error && <p className="error">{error}</p>}
                <p className="register-link">
                    ¿No tienes una cuenta? <span onClick={handleRegister}>Regístrate aquí</span>
                </p>
            </div>
        </div>
    );
};