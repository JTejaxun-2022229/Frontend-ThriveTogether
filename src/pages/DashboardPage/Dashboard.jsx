import React from 'react';
import { useUser } from '../../shared/hooks/useUser';
import logo from '../../assets/image/thriveTogether.png';
import './dashboard.css';

const Dashboard = () => {
    const { user } = useUser();

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <img src={logo} alt="Logo" className="dashboard-logo" />
                <h1>Bienvenido, {user ? user.username : 'Usuario'}</h1>
                <p>
                    Thrive Together es un programa dedicado a ayudar a las personas a alcanzar su máximo potencial a través de
                    colaboraciones y recursos compartidos.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;