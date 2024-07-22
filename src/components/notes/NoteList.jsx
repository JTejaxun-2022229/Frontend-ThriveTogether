import React, { useEffect, useState } from 'react';
import { useNotes } from '../hooks/useNotes';
import './notes.css';

const NoteList = () => {

    const { notes, loading, error } = useNotes();

    return (
        <div className="note-list">
            <h1>Lista de Notas</h1>
            {loading && <p>Cargando...</p>}
            {error && <p>Error al cargar las notas.</p>}
            {!loading && !error && (
                <ul>
                    {notes.map((note) => (
                        <li key={note._id}>
                            <h2>{note.title}</h2>
                            <p>{note.body}</p>
                            <small>Creado por: {note.creatorUserId.name}</small>
                            <small>Dirigido a: {note.notedUserId.name}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoteList;
