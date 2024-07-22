import React, { useState } from 'react';
import { useSupporters } from '../../shared/hooks/useSupporters';
import './supporters.css';

export const ProfesionalSupporter = () => {

    const { supporters, loading, error } = useSupporters();

    return (
        <div className="supporters-management">
            <div className="header">
                <h1>Gestión de Profesionales de Soporte</h1>
            </div>
            <div className="supporters-table">
                {loading && <p>Cargando...</p>}
                {error && <p>Error al cargar los profesionales de soporte.</p>}
                {!loading && !error && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Foto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supporters.map((supporter) => (
                                <tr key={supporter.id}>
                                    <td>{supporter.id}</td>
                                    <td>{supporter.name}</td>
                                    <td>{supporter.description}</td>
                                    <td>
                                        <img src={supporter.photo} alt={supporter.username} className="supporter-photo" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

