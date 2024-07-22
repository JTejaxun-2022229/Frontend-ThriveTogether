import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../shared/hooks/useUsers';
import './user.css';

export const UserManagement = () => {

    const navigate = useNavigate();
    const { users, loading, error } = useUsers();

    const handleCreateUser = () => {

        navigate('/create-user');
    };

    return (
        <div className="user-management">
            <div className="header">
                <h1>Gestión de Usuarios</h1>
                <button onClick={handleCreateUser}>Crear</button>
            </div>
            <div className="user-table">
                {loading && <p>Cargando...</p>}
                {error && <p>Error al cargar los usuarios.</p>}
                {!loading && !error && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
