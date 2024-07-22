import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../shared/hooks/useRegister';
import './auth.css';
import logo from '../../assets/image/thriveTogether.png';

export const Register = () => {

    const { register, error } = useRegister();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        description: '',
        photo: '',
        vices: [],
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = async (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset'); // Reemplaza con tu configuración
        
        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
            formData
        );
        setFormData({ ...formData, photo: response.data.secure_url });
    };

    const handleVicesChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const newVices = checked
                ? [...prevData.vices, value]
                : prevData.vices.filter((vice) => vice !== value);
            return { ...prevData, vices: newVices };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await register(formData);
        if (success) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Logo" className="logo" />
                <h1>Registrarse en Thrive Together</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Nombre de usuario"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="description"
                            placeholder="Descripción"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <div className="form-group">
                        <label>Vicios:</label>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    value="smoking"
                                    onChange={handleVicesChange}
                                />
                                Fumar
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="drinking"
                                    onChange={handleVicesChange}
                                />
                                Beber
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="gambling"
                                    onChange={handleVicesChange}
                                />
                                Juegos de azar
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="drugs"
                                    onChange={handleVicesChange}
                                />
                                Drogas
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="other"
                                    onChange={handleVicesChange}
                                />
                                Otros
                            </label>
                        </div>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};
