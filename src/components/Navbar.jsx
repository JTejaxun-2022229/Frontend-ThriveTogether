import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/thriveTogether.png';
import './navbar.css';

export const Navbar = ({ user }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <span>Thrive Together</span>
            </div>
            <div className="navbar-right">
                <div className="dropdown">
                    <button className="dropbtn">{user ? user.username : 'Usuario'}</button>
                    <div className="dropdown-content">
                        <a href="/profile">Profile</a>
                        <a href="#" onClick={handleLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

