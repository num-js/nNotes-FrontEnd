import React, { useMemo, useState } from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import { useLocalStorage } from './hooks/useLocalStorage';

export type Note = {
    id: string
} & NoteData;

export type NoteData = {
    title: string,
    tags: Tag[]
    description: string
}

type RawNote = {
    id: string
} & RawNoteData

export type RawNoteData = {
    title: string,
    tagIds: string[]
    description: string
}

export type Tag = {
    id: string
    label: string
}

function App() {

    const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
    const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

    const navigate = useNavigate();

    const noteWithTags = useMemo(() => {
        return notes.map(note => {
            return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
        })
    }, [notes, tags]);

    const onCreateNote = ({ tags, ...data }: NoteData) => {
        setNotes(prevData => {
            const noteIdRaw = Date.now();
            const noteId = '' + noteIdRaw;
            return [
                ...prevData,
                {
                    ...data,
                    id: noteId,
                    tagIds: tags.map(tag => tag.id)
                }
            ]
        });

        navigate('/');
    }

    const onAddTag = (newTag: Tag) => {
        setTags(prevTags => [...prevTags, newTag])
    }

    return (
        <>
            <Routes>
                <Route path='/' element={
                    <Home
                        availableTags={tags}
                        notes={noteWithTags}
                    />
                } />
                <Route path='/new-note' element={
                    <NewNote
                        onSubmit={onCreateNote}
                        onAddTag={onAddTag}
                        availableTags={tags}
                    />
                } />
                <Route path='/:id'>
                    <Route index element={<h1>New Show</h1>} />
                    <Route path="edit" element={<h1>Edit Show</h1>} />
                </Route>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
